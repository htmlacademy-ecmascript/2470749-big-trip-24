import PointListView from '../view/point-list-view';
import SortingView from '../view/sorting-view';
import NoPointsView from '../view/no-points-view';
import { RenderPosition, remove, render } from '../framework/render';
import PointPresenter from './point-presenter';
import { SortType, UpdateType, UserAction, FilterType, TimeLimit } from '../const';
import { getWeightForPrice, getWeigthForDay, getWeightForTime } from '../utils/point-utils';
import { filter } from '../utils/filter-utils';
import NewPointPresenter from './new-point-presenter';
import LoadingView from '../view/loading-view';
import UiBlocker from '../framework/ui-blocker/ui-blocker';

export default class MainPresenter {
  #pointsListComponent = new PointListView();
  #loadingComponent = new LoadingView();
  #pointsContainer = null;
  #pointModel = null;
  #pointPresenters = new Map();
  #noPoints = null;
  #filtersModel = null;
  #newPointPresenter = null;
  #isLoading = true;
  #sorting = null;
  #currentSortType = SortType.DAY;
  #currentFilterType = FilterType.EVERYTHING;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({ pointsContainer, pointModel, filtersModel, onNewPointCancel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
    this.#filtersModel = filtersModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointsListContainer: this.#pointsListComponent.element,
      onPointAdd: this.#handleViewAction,
      onDestroy: onNewPointCancel,
    });

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filter() {
    return this.#filtersModel.filter;
  }

  get points() {
    this.#currentFilterType = this.filter;
    const points = [...this.#pointModel.points];
    const filteredPoints = filter[this.#currentFilterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort(getWeightForTime);
      case SortType.PRICE:
        return filteredPoints.sort(getWeightForPrice);
      case SortType.DAY:
        return filteredPoints.sort(getWeigthForDay);
    }
    return filteredPoints;
  }

  get allOffers() {
    return this.#pointModel.allOffers;
  }

  get allDestinations() {
    return this.#pointModel.allDestinations;
  }

  init() {
    this.#renderMain();
  }

  createPoint() {
    this.#currentSortType = FilterType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    this.#newPointPresenter.init(this.allOffers, this.allDestinations);
    remove(this.#noPoints);
  }

  #renderMain() {
    render(this.#pointsListComponent, this.#pointsContainer);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    // this.#renderSorting(this.#currentSortType);
    this.#renderPointsList();
  }

  #renderSorting(sortType) {
    this.#sorting = new SortingView({
      onSortingClick: this.#handleSortingClick,
      sortType: sortType
    });

    render(this.#sorting, this.#pointsContainer, RenderPosition.AFTERBEGIN);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#pointsContainer);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent.element,
      onModeChange: this.#handleModeChange,
      onEditPointView: this.#resetPointView,
      onModelUpdate: this.#handleViewAction,
    });

    pointPresenter.init(point, this.allOffers, this.allDestinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #resetPointView = (point) => {
    this.#pointPresenters.get(point.id).resetView();
  };

  #renderPointsList() {
    remove(this.#sorting);
    this.#renderSorting(this.#currentSortType);

    if (this.points.length === 0 && !document.querySelector('.trip-events__msg')) {
      this.#renderNoPoints();
      return;
    }

    for (const point of this.points) {
      this.#renderPoint(point);
    }
  }

  #renderNoPoints() {
    this.#noPoints = new NoPointsView({
      filter: this.#currentFilterType,
    });

    render(this.#noPoints, this.#pointsContainer);
  }

  #clearPointsList({ resetFilters = false, resetSorting = false } = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    this.#newPointPresenter.destroy();

    remove(this.#sorting);
    remove(this.#loadingComponent);

    if (resetFilters) {
      this.#currentFilterType = FilterType.EVERYTHING;
    }

    if (resetSorting) {
      this.#currentSortType = SortType.DAY;
    }

    if (this.#noPoints) {
      remove(this.#noPoints);
    }
  }

  // обработчики

  // Здесь будем вызывать обновление модели.
  // actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
  // updateType - тип изменений, нужно чтобы понять, что после нужно обновить
  // update - обновленные данные
  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#pointModel.updatePoint(updateType, update);
        } catch (err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointModel.addPoint(updateType, update);
        } catch (err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointModel.deletePoint(updateType, update);
        } catch (err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  // В зависимости от типа изменений решаем, что делать:
  #handleModelEvent = (updateType, updatedPoint) => {
    switch (updateType) {
      // - обновить часть списка (например, когда поменялись данные поинта при редактировании)
      case UpdateType.PATCH:
        this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.allOffers, this.allDestinations);
        break;
      // - обновить список
      case UpdateType.MINOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      // - обновить всю доску (с очисткой фильтров и сортировки)
      case UpdateType.MAJOR:
        this.#clearPointsList({ resetFilters: true, resetSorting: true });
        this.#renderPointsList();
        break;
      // - реагирует на взаимодействие с сервером
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderMain();
        break;
    }
  };

  #handleSortingClick = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPointsList();
    remove(this.#sorting);
    this.#renderSorting(this.#currentSortType);
    this.#renderPointsList();
  };

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}

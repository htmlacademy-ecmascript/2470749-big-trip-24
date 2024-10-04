import PointListView from '../view/point-list-view';
import SortingView from '../view/sorting-view';
import NoPointsView from '../view/no-points-view';
import { RenderPosition, render } from '../framework/render';
import PointPresenter from './point-presenter';
import { SortType, UpdateType, UserAction } from '../const';
import { getWeightForPrice, getWeightForTime } from '../utils/point-utils';
import { filter } from '../utils/filter-utils';

export default class MainPresenter {
  #pointsListComponent = new PointListView();
  #pointsContainer = null;
  #pointModel = null;
  #pointPresenters = new Map();
  #noPoints = new NoPointsView();
  #filtersModel = null;

  #sorting = null;
  #currentSortType = SortType.DAY;
  #currentFilterType = null;

  constructor({ pointsContainer, pointModel, filtersModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
    this.#filtersModel = filtersModel;
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
      case SortType.EVENT:
        break;
      case SortType.OFFER:
        break;
      case SortType.DAY:
        return filteredPoints;
    }
    return filteredPoints;
  }

  get offers() {
    return this.#pointModel.offers;
  }

  get destinations() {
    return this.#pointModel.destinations;
  }

  init() {
    this.#renderSorting(this.#currentSortType);
    this.#renderMain();
  }

  #renderMain() {
    render(this.#pointsListComponent, this.#pointsContainer);

    if (this.points.length === 0) {
      this.#renderNoPoints();
    }

    this.#renderPointsList(this.points);
  }

  #renderSorting(sortType) {
    this.#sorting = new SortingView({
      onSortingClick: this.#handleSortingClick,
      sortType: sortType
    });

    render(this.#sorting, this.#pointsContainer, RenderPosition.AFTERBEGIN);
  }

  #handleSortingClick = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPointsList();
    this.#renderPointsList();
    this.#renderSorting(sortType);
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent.element,
      onPointsChange: this.#handlePointsChange,
      onModeChange: this.#handleModeChange,
      onPointClear: this.#clearPoint,
      onEditPointView: this.#resetPointView
    });

    pointPresenter.init(point, this.offers, this.destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointsChange = (updatedPoint) => {
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.offers, this.destinations);
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_TASK:
        this.#pointModel.updateTask(updateType, update);
        break;
      case UserAction.ADD_TASK:
        this.#pointModel.addTask(updateType, update);
        break;
      case UserAction.DELETE_TASK:
        this.#pointModel.deleteTask(updateType, update);
        break;
    }
    // Здесь будем вызывать обновление модели.
    // actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
    // updateType - тип изменений, нужно чтобы понять, что после нужно обновить
    // update - обновленные данные
  };

  #handleModelEvent = (updateType, point, offers, destinations) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(point.id).init(point, offers, destinations);
        break;
      case UpdateType.MINOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      case UpdateType.MAJOR:
        this.#clearPointsList(resetFilters = true, resetSorting = true);
        this.#renderPointsList();
        break;
    }
    // В зависимости от типа изменений решаем, что делать:
    // - обновить часть списка (например, когда поменялось описание)
    // - обновить список (например, когда задача ушла в архив)
    // - обновить всю доску (например, при переключении фильтра)
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #resetPointView = (point) => {
    this.#pointPresenters.get(point.id).resetView();
  };

  #renderPointsList() {
    for (const point of this.points) {
      this.#renderPoint(point);
    }
  }

  #clearPointsList(resetFilters = false, resetSorting = false) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    // Если в момент нажатия на кнопку «New Event» был выбран фильтр или применена сортировка,
    // то они сбрасываются на состояния «Everything» и по дате соответственно.
    if (resetFilters === true) {

    }
  }

  #renderNoPoints() {
    render(this.#noPoints, this.#pointsListComponent.element);
  }

  #clearPoint = (point) => {
    const targetPresenter = this.#pointPresenters.get(point.id);
    targetPresenter.destroy();
  };
}

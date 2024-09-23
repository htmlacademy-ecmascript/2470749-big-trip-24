import PointListView from '../view/point-list-view';
import SortingView from '../view/sorting-view';
import NoPointsView from '../view/no-points-view';
import { render } from '../framework/render';
import PointPresenter from './point-presenter';
import { updatePoint } from '../utils/common-utils';
import { SortType } from '../const';
import { getWeightForPrice, getWeightForTime } from '../utils/point-utils';

export default class MainPresenter {
  #pointsListComponent = new PointListView();
  #pointsContainer = null;
  #pointModel = null;
  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();
  #noPoints = new NoPointsView();

  #sorting = null;
  #currentSortType = SortType.DAY;
  #initialPointsLayout = [];

  constructor({ pointsContainer, pointModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    this.#initialPointsLayout = [...this.#pointModel.points];

    this.#renderSorting();
    this.#renderMain();
  }

  #renderMain() {
    render(this.#pointsListComponent, this.#pointsContainer);

    if (this.#points.length === 0) {
      this.#renderNoPoints();
    }

    this.#renderPointsList();
  }

  #renderSorting() {
    this.#sorting = new SortingView({
      onSortingClick: this.#handleSortingClick,
    });

    render(this.#sorting, this.#pointsContainer);
  }

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(getWeightForTime);
        break;
      case SortType.PRICE:
        this.#points.sort(getWeightForPrice);
        break;
      case SortType.EVENT:
        break;
      case SortType.OFFER:
        break;
      case SortType.DAY:
        this.#points = [...this.#initialPointsLayout];
    }
    this.#currentSortType = sortType;
  };

  #handleSortingClick = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointsList();
    this.#renderPointsList();
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent.element,
      onPointsChange: this.#handlePointsChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point, this.#offers, this.#destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handlePointsChange = (updatedPoint) => {
    this.#points = updatePoint(this.#points, updatedPoint);
    this.#initialPointsLayout = updatePoint(this.#initialPointsLayout, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPointsList() {
    for (const point of this.#points) {
      this.#renderPoint(point);
    }
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderNoPoints() {
    render(this.#noPoints, this.#pointsListComponent.element);
  }
}

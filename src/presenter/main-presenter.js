import PointListView from '../view/point-list-view';
import SortingView from '../view/sorting-view';
import NoPointsView from '../view/no-points-view';
import { render } from '../framework/render';
import PointPresenter from './point-presenter';
import { updatePoint } from '../utils/common-utils';

export default class MainPresenter {
  #pointsListComponent = new PointListView();
  #pointsContainer = null;
  #pointModel = null;
  #points = [];
  #destinations = [];
  #offers = [];
  #pointPresenters = new Map();

  constructor({ pointsContainer, pointModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];

    this.#renderMain();

    for (const point of this.#points) {
      this.#renderPoint(point);
    }
  }

  #renderMain() {
    render(new SortingView(), this.#pointsContainer);
    render(this.#pointsListComponent, this.#pointsContainer);

    if (this.#points.length === 0) {
      render(new NoPointsView(), this.#pointsListComponent.element);
    }
  }

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
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}

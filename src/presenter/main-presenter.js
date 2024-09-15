import PointListView from '../view/point-list-view';
import EditPoint from '../view/edit-point-view';
import CreatePoint from '../view/create-point-view';
import PointItemView from '../view/point-item-view';
import SortingView from '../view/sorting-view';
import { render } from '../framework/render';


export default class MainPresenter {
  #pointsListComponent = new PointListView();
  #pointsContainer = null;
  #pointModel = null;
  #points = [];
  #destinations = [];
  #offers = [];

  constructor({pointsContainer, pointModel}) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];

    render(new SortingView(), this.#pointsContainer);
    render(this.#pointsListComponent, this.#pointsContainer);
    render(new EditPoint({point: this.#points[0], offers: this.#offers, destinations: this.#destinations}), this.#pointsListComponent.element);
    render(new CreatePoint(), this.#pointsListComponent.element);

    for (let i = 1; i < this.#points.length; i++) {
      render(new PointItemView({point: this.#points[i], offers: this.#offers, destinations: this.#destinations}), this.#pointsListComponent.element);
    }
  }
}

import { render } from "../framework/render";
import PointItemView from "../view/point-item-view";
import EditPointView from "../view/edit-point-view";

export default class PointPresenter {
  #point = null;
  #destinations = null;
  #offers = null;
  #pointsListComponent = null;

  #pointComponent = null;
  #editPointComponent = null;

  constructor({ pointsListComponent }) {
    this.#pointsListComponent = pointsListComponent;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    this.#pointComponent = new PointItemView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    this.#editPointComponent = new EditPointView({
      point,
      offers,
      destinations,
      onEditClick: () => {
        this.#replaceFormToPoint();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
      onFormSaveClick: () => {
        this.#replaceFormToPoint();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    render(this.#pointComponent, this.#pointsListComponent);
  }

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }
  };
}


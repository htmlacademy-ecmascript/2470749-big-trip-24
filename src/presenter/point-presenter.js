import { render, replace, remove } from '../framework/render';
import PointItemView from '../view/point-item-view';
import EditPointView from '../view/edit-point-view';

export default class PointPresenter {
  #point = null;
  #destinations = null;
  #offers = null;
  #pointsListComponent = null;

  #pointComponent = null;
  #editPointComponent = null;

  #handlePointsChange = null;

  constructor({ pointsListComponent, onPointsChange }) {
    this.#pointsListComponent = pointsListComponent;
    this.#handlePointsChange = onPointsChange;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointItemView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: () => {
        this.#replacePointToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#editPointComponent = new EditPointView({
      point,
      offers,
      destinations,
      onEditClick: () => {
        this.#replaceFormToPoint();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
      onFormSaveClick: this.#handleFormSaveClick
    });

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#pointsListComponent);
      return;
    }

    // проверка на наличие DOM элемента чтобы не пытаться заменить то, что не было отрисовано
    if (this.#pointsListComponent.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsListComponent.contains(prevEditPointComponent.element)) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
  }

  #handleFavoriteClick = () => {
    this.#handlePointsChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  #handleFormSaveClick = (point) => {
    this.#handlePointsChange(point);
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}


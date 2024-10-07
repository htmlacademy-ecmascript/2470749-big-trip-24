import { BLANK_POINT, UpdateType, UserAction } from '../const';
import { render, replace, remove, RenderPosition } from '../framework/render';
import EditPointView from '../view/edit-point-view';
import { nanoid } from 'nanoid';

export default class NewPointPresenter {
  #pointsListContainer = null;
  #handleModelEvent = null;
  #editPointComponent = null;
  #handlePointAdd = null;
  #handleDestroy = null;
  #offers = [];
  #destinations = [];


  constructor({ pointsListContainer, onPointAdd }) {
    this.#pointsListContainer = pointsListContainer;
    this.#handlePointAdd = onPointAdd;
  }

  init(offers, destinations) {
    this.#offers = offers;
    this.#destinations = destinations;

    if (this.#editPointComponent !== null) {
      return;
    }

    this.#editPointComponent = new EditPointView({
      point: BLANK_POINT,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSaveClick: this.#handleFormSaveClick,
      onFormDeleteClick: this.#handleFormDeleteClick,
      isNewPoint: true
    });

    render(this.#editPointComponent, this.#pointsListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#editPointComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#editPointComponent);
    this.#editPointComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSaveClick = (point) => {
    this.#handlePointAdd(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      { id: nanoid(), ...point },
    );
    this.destroy();
  };

  #handleFormDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();

      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}

import { UpdateType, UserAction } from "../const";
import CreatePointView from "../view/create-point-view";
import { render, replace, remove, RenderPosition } from "../framework/render";
import EditPointView from "../view/edit-point-view";
import { nanoid } from 'nanoid';

export default class NewPointPresenter {
  // #newPointComponent  = null;
  #pointsListContainer = null;
  #handleModelEvent = null;
  #editPointComponent = null;
  #handlePointAdd = null;
  #handleDestroy = null;
  #offers = [];
  #destinations = [];


  constructor({ pointsListContainer, onPointAdd, onDestroy }) {
    this.#pointsListContainer = pointsListContainer;
    this.#handlePointAdd = onPointAdd;
    // this.#handleDestroy = onDestroy;
  }

  init(offers, destinations) {
    this.#offers = offers;
    this.#destinations = destinations;

    if (this.#editPointComponent !== null) {
      return;
    }

    this.#editPointComponent = new EditPointView({
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSaveClick: this.#handleFormSaveClick,
      onFormDeleteClick: this.#handleFormDeleteClick,
    })

    render(this.#editPointComponent, this.#pointsListContainer, RenderPosition.AFTERBEGIN)

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

  }

  #handleFormDeleteClick = () => {
    this.destroy();
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();

      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}

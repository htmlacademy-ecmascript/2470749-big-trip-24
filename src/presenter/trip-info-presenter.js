import TripInfoView from '../view/trip-info-view';
import { RenderPosition } from '../framework/render';
import { render, replace, remove } from '../framework/render';

export default class TripInfoPresenter {
  #pointModel = null;
  #mainContainer = null;
  #tripInfoComponent = null;

  constructor({ pointModel, mainContainer }) {
    this.#pointModel = pointModel;
    this.#mainContainer = mainContainer;

    this.#pointModel.addObserver(this.#handleModelEvent);
  }

  init() {
    if (this.#pointModel.points.length === 0) {
      if (this.#tripInfoComponent !== null) {
        remove(this.#tripInfoComponent);
      }
      return;
    }

    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points: this.#pointModel.points,
      allDestinations: this.#pointModel.allDestinations,
      allOffers: this.#pointModel.allOffers,
    });

    if(prevTripInfoComponent === null){
      render(this.#tripInfoComponent, this.#mainContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };
}

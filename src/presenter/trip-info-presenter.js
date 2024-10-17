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
    const points = this.#pointModel.points;
    const allDestinations = this.#pointModel.allDestinations;
    const allOffers = this.#pointModel.allOffers;

    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points: points,
      allDestinations: allDestinations,
      allOffers: allOffers,
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

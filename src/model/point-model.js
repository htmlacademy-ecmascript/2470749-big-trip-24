import { getPoints } from '../mock/point-mock';
import { getDestinations } from '../mock/destinations-mock';
import { getOffers } from '../mock/offers-mock';

export default class PointModel {
  points = getPoints();
  destinations = getDestinations();
  offers = getOffers();

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}

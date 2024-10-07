import { getPoints } from '../mock/point-mock';
import { getDestinations } from '../mock/destinations-mock';
import { getOffers } from '../mock/offers-mock';
import Observable from '../framework/observable';

export default class PointModel extends Observable {
  #points = getPoints();
  #destinations = getDestinations();
  #offers = getOffers();

  get points() {
    return this.#points;
  }

  set points(points) {
    this.#points = points;
  }

  updatePoint(updateType, updatedPoint) {
    const pointIndex = this.#points.findIndex((point) => point.id === updatedPoint.id);
    this.#points = [...this.#points].splice(pointIndex, 1, updatedPoint);

    this._notify(updateType, updatedPoint);
  }

  addPoint(updateType, updatedPoint) {
    this.#points = [updatedPoint, ...this.#points];

    this._notify(updateType, updatedPoint);
  }

  deletePoint(updateType, updatedPoint) {
    const pointIndex = this.#points.findIndex((point) => point.id === updatedPoint.id);

    this.#points = [
      ...this.#points.slice(0, pointIndex),
      ...this.#points.slice(pointIndex + 1),
    ];

    // this.#points = [...this.#points].splice(pointIndex, 1);

    this._notify(updateType, updatedPoint);
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}

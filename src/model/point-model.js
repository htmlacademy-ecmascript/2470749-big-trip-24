import { getPoints } from '../mock/point-mock';
import { getDestinations } from '../mock/destinations-mock';
import { getOffers } from '../mock/offers-mock';
import Observable from '../framework/observable';
import { nanoid } from 'nanoid';

export default class PointModel extends Observable {
  #points = getPoints();
  #allDestinations = getDestinations();
  #allOffers = getOffers();
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;

    this.#pointsApiService.points.then((points) =>
    console.log(points.map(this.#adaptToClient)));
  }

  get points() {
    return this.#points;
  }

  updatePoint(updateType, updatedPoint) {
    const pointIndex = this.#points.findIndex((point) => point.id === updatedPoint.id);

    this.#points = [
      ...this.#points.slice(0, pointIndex),
      updatedPoint,
      ...this.#points.slice(pointIndex + 1),
    ];

    this._notify(updateType, updatedPoint);
  }

  addPoint(updateType, updatedPoint) {
    this.#points = [{ id: nanoid(), ...updatedPoint }, ...this.#points];

    this._notify(updateType, updatedPoint);
  }

  deletePoint(updateType, updatedPoint) {
    const pointIndex = this.#points.findIndex((point) => point.id === updatedPoint.id);

    this.#points = [
      ...this.#points.slice(0, pointIndex),
      ...this.#points.slice(pointIndex + 1),
    ];

    this._notify(updateType, updatedPoint);
  }

  get destinations() {
    return this.#allDestinations;
  }

  get offers() {
    return this.#allOffers;
  }

  #adaptToClient(point) {
    const adaptedPoint = {...point,
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      basePrice: point['base_price'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['base_price'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}

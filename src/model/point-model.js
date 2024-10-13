import Observable from '../framework/observable';
import { nanoid } from 'nanoid';
import { UpdateType } from '../const';

export default class PointModel extends Observable {
  #points = [];
  #allDestinations = [];
  #allOffers = [];
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#allDestinations;
  }

  get offers() {
    return this.#allOffers;
  }

  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
      console.log(this.#points);

      const allDestinations = await this.#pointsApiService.allDestinations;
      this.#allDestinations = allDestinations.map((destinations) =>  this.#allDestinations = destinations);
      console.log(this.#allDestinations);

      const allOffers = await this.#pointsApiService.allOffers;
      this.#allOffers = allOffers.map((offers) =>  this.#allOffers = offers);
      console.log(this.#allOffers);
    } catch (err) {
      this.#points = [];
      this.#allDestinations = [];
      this.#allOffers = [];
    }

    this._notify(UpdateType.INIT);
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

  #adaptToClient(point) {
    const adaptedPoint = {
      ...point,
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

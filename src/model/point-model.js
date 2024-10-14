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

      this.#allDestinations = await this.#pointsApiService.allDestinations;
      this.#allOffers = await this.#pointsApiService.allOffers;

      console.log(this.#allDestinations);
      console.log(this.#allOffers);
    } catch (err) {
      this.#points = [];
      this.#allDestinations = [];
      this.#allOffers = [];
    }

    this._notify(UpdateType.INIT);
  }

  async updatePoint(updateType, update) {
    const pointIndex = this.#points.findIndex((point) => point.id === update.id);

    if (pointIndex === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    try {
      const responce = await this.#pointsApiService.updatePoint(update);
      const updatedPoint = this.#adaptToClient(responce);

      this.#points = [
        ...this.#points.slice(0, pointIndex),
        updatedPoint,
        ...this.#points.slice(pointIndex + 1),
      ];

      this._notify(updateType, updatedPoint);
    } catch (err) {
      console.log(err);
      throw new Error('Can\'t update point');
    }
  }

  addPoint(updateType, update) {
    this.#points = [{ id: nanoid(), ...update }, ...this.#points];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const pointIndex = this.#points.findIndex((point) => point.id === update.id);

    this.#points = [
      ...this.#points.slice(0, pointIndex),
      ...this.#points.slice(pointIndex + 1),
    ];

    this._notify(updateType, update);
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

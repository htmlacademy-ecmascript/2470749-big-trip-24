import AbstractView from '../framework/view/abstract-view';
import { humanizePointDate } from '../utils/point-utils';
import { DATE_FORMAT } from '../const';

const getFirstPoint = (points) => {
  const sortedByDateFromPoints = [...points].sort((a, b) => a.dateFrom - b.dateFrom);
  const firstPoint = sortedByDateFromPoints[0].dateFrom;
  return firstPoint;
}

const getLastPoint = (points) => {
  const sortedByDateFromPoints = [...points].sort((a, b) => b.dateTo - a.dateTo);
  const lastPoint = sortedByDateFromPoints[0].dateTo;
  return lastPoint;
}

const getDestinationIdList = (points) => {
  const destinationIdList = [];

  points.forEach((point) => {
    destinationIdList.push(point.destination);
  })
  return destinationIdList;
}

const getDestinationsTitle = (destinationIdList, allDestinations) => {
  const firstDestination = allDestinations.find((destination) => destination.id === destinationIdList[0]).name;
  const lastDestination = allDestinations.find((destination) => destination.id === destinationIdList[destinationIdList.length - 1]).name;

  if (destinationIdList.length === 1) {
    return `<h1 class="trip-info__title">${firstDestination}</h1>`
  }

  if (destinationIdList.length === 2) {
    const secondDestination = allDestinations.find((destination) => destination.id === destinationIdList[1]).name;
    return `<h1 class="trip-info__title">${firstDestination} &mdash; ${secondDestination}</h1>`
  }

  if (destinationIdList.length === 3) {
    return `<h1 class="trip-info__title">${firstDestination} &mdash; ${lastDestination}</h1>`
  }

  if (destinationIdList.length > 3) {
    return `<h1 class="trip-info__title">${firstDestination} &mdash; . . . &mdash; ${lastDestination}</h1>`;
  }
}



function createTripInfoTemplate(points, allDestinations) {

  const destinationIdList = getDestinationIdList(points);

  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
  <h1 class="trip-info__title">${getDestinationsTitle(destinationIdList, allDestinations)}</h1>
    <p class="trip-info__dates">${humanizePointDate(getFirstPoint(points), DATE_FORMAT)}&nbsp;&mdash;&nbsp;${humanizePointDate(getLastPoint(points), DATE_FORMAT)}</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
  </section>`;
}

export default class TripInfoView extends AbstractView {
  #points = [];
  #allDestinations = [];
  #allOffers = [];

  constructor({ points, allDestinations, allOffers }) {
    super();
    this.#points = points;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#allDestinations, this.#allOffers);
  }
}

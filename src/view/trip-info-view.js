import AbstractView from '../framework/view/abstract-view';
import { humanizePointDate } from '../utils/point-utils';
import { TRIP_INFO_DATE_FORMAT } from '../const';

const getFirstPoint = (points) => {
  const sortedByDateFromPoints = [...points].sort((a, b) => a.dateFrom - b.dateFrom);
  const firstPoint = sortedByDateFromPoints[0].dateFrom;
  return firstPoint;
};

const getLastPoint = (points) => {
  const sortedByDateFromPoints = [...points].sort((a, b) => b.dateTo - a.dateTo);
  const lastPoint = sortedByDateFromPoints[0].dateTo;
  return lastPoint;
};

const getDestinationsTitle = (points, allDestinations) => {
  const sortedByDateFromPoints = [...points].sort((a, b) => a.dateFrom - b.dateFrom);

  const firstDestinationId = sortedByDateFromPoints[0].destination;
  const lastDestinationId = sortedByDateFromPoints[sortedByDateFromPoints.length - 1].destination;

  const firstDestination = allDestinations.find((destination) => destination.id === firstDestinationId).name;
  const lastDestination = allDestinations.find((destination) => destination.id === lastDestinationId).name;

  if (points.length === 1) {
    return `${firstDestination}`;
  }

  if (points.length === 2) {
    const secondDestinationId = sortedByDateFromPoints[1].destination;
    const secondDestination = allDestinations.find((destination) => destination.id === secondDestinationId).name;
    return `${firstDestination} &mdash; ${secondDestination}`;
  }

  if (points.length === 3) {
    return `${firstDestination} &mdash; ${lastDestination}`;
  }

  if (points.length > 3) {
    return `${firstDestination} &mdash; . . . &mdash; ${lastDestination}`;
  }
};

const getAllOffersData = (allOffers) => {
  const allOffersInfo = allOffers.map((offer) => offer.offers).flat();
  const allOffersCollection = new Map();

  allOffersInfo.forEach((offers) => {
    allOffersCollection.set(offers.id, offers.price);
  });

  return allOffersCollection;
};

const getOffersFullPrice = (points, allOffers) => {
  const pointOffersIdList = points.map((point) => point.offers).flat();
  const allOffersData = getAllOffersData(allOffers);

  let offersFullPrice = 0;

  allOffersData.forEach((value, key) => {
    pointOffersIdList.forEach((pointOfferId) => {
      if (key === pointOfferId) {
        offersFullPrice += value;
      }
    });
  });

  return offersFullPrice;
};

const getPointsFullPrice = (points) => {
  const allBasePriceList = points.map((point) => point.basePrice);
  const allBasePrice = allBasePriceList.reduce((priceA, priceB) => priceA + priceB, 0);

  return allBasePrice;
};

function createTripInfoTemplate(points, allDestinations, allOffers) {
  if (points.length > 0) {
    return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
  <h1 class="trip-info__title">${getDestinationsTitle(points, allDestinations)}</h1>
    <p class="trip-info__dates">${humanizePointDate(getFirstPoint(points), TRIP_INFO_DATE_FORMAT)}&nbsp;&mdash;&nbsp;${humanizePointDate(getLastPoint(points), TRIP_INFO_DATE_FORMAT)}</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${getPointsFullPrice(points) + getOffersFullPrice(points, allOffers)}</span>
  </p>
  </section>`;
  }
  return '';
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

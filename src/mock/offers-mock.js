import { getPointsData } from './point-mock';
import { OFFERS } from '../const';

const getOffersArrayFromPoints = (offersIdArray) => {
  const offersArray = [];

  offersIdArray.forEach((offerId) => {
    const offerElement = OFFERS.find((offer) => offer.id === offerId);
    offersArray.push(offerElement);
  });

  return offersArray;
};

const getOfferMockElement = (type, offersIdArray) => {
  const offerMockElement = {
    type: type,
    offers: getOffersArrayFromPoints(offersIdArray)
  };

  return offerMockElement;
};

const getOffersMockArray = () => {
  const offersMockArray = [];
  const pointMockArray = getPointsData();

  pointMockArray.forEach((point) => {
    const pointType = point.type;
    const offersIdArray = point.offers;
    const offerMockElement = getOfferMockElement(pointType, offersIdArray);

    offersMockArray.push(offerMockElement);
  });

  return offersMockArray;
};

const offerMockArray = getOffersMockArray();

const getOffersData = () => offerMockArray;

export { getOffersData };


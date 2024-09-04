import { getCopyOfPointMockArray } from "./point-mock"
import { OFFERS } from "../const";

const getOffersArray = (offersIdArray) => {
  const offersArray = [];

  offersIdArray.forEach((offerId) => {
    const offer = OFFERS.find(offer => offer.id === offerId);
    offersArray.push(offer);
  })

  return offersArray;
}

const getFullOfferMockElement = (type, offersIdArray) => {
  const offerMockElement = {
    type: type,
    offers: getOffersArray(offersIdArray)
  }

  return offerMockElement;
}

const getOfferMockArray = () => {
  const offerMockArray = [];
  const pointMockArray = getCopyOfPointMockArray();

  pointMockArray.forEach((point) => {
    const pointType = point.type;
    const offersIdArray = point.offers;
    const offerMockElement = getFullOfferMockElement(pointType, offersIdArray);

    offerMockArray.push(offerMockElement);
  })

  return offerMockArray;
}

const offerMockArray = getOfferMockArray();

export { offerMockArray };


import { getRandomArrayElement, getRandomInteger, createIdGenerator } from "../util"
import { TYPES, CITIES, DESCRIPTION_TEXT, DATES, OFFERS } from "../const";

const getRandomDescriptionPoint = (text) => {
  const descriptionsArray = DESCRIPTION_TEXT.split('.');
  const randomDescriptionText = Array.from({ length: 5 }, () => getRandomArrayElement(descriptionsArray).trim()).join('.');
  return randomDescriptionText;
}

const generateRandomPointId = createIdGenerator();

const getPointMockElement = () => {
  let pointDate = getRandomArrayElement(DATES);

  const getPointMockElement = {
    id: generateRandomPointId(),
    type: getRandomArrayElement(TYPES),
    destination: getRandomInteger(1, CITIES.length),
    description: getRandomDescriptionPoint(DESCRIPTION_TEXT),
    dateFrom: pointDate.dateFrom,
    dateTo: pointDate.dateTo,
    basePrice: getRandomInteger(20, 5000),
    offers: Array.from({ length: getRandomInteger(1, 3) }, (_, i) => getRandomInteger(1, OFFERS.length)),
    isFavorite: true
  }

  return getPointMockElement;
}

const getPointMockArray = () => {
  return Array.from({ length: 10 }, () => getPointMockElement())
}

const pointMockArray = getPointMockArray();

export { pointMockArray };


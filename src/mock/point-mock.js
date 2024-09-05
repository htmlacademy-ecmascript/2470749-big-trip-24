import { getRandomArrayElement, getRandomInteger, createIdGenerator } from '../util';
import { TYPES, CITIES, DESCRIPTION_TEXT, DATES, OFFERS } from '../const';

const POINTS_COUNT = 10;

const getRandomDescriptionPoint = (text) => {
  const descriptionsArray = text.split('.');
  const randomDescriptionText = Array.from({ length: 5 }, () => getRandomArrayElement(descriptionsArray).trim()).join('.');
  return randomDescriptionText;
};

const generateRandomPointId = createIdGenerator();

const getPointMockElement = () => {
  const pointDate = getRandomArrayElement(DATES);

  const pointMockElement = {
    id: generateRandomPointId(),
    type: getRandomArrayElement(TYPES),
    destination: getRandomInteger(1, CITIES.length),
    description: getRandomDescriptionPoint(DESCRIPTION_TEXT),
    dateFrom: pointDate.dateFrom,
    dateTo: pointDate.dateTo,
    basePrice: getRandomInteger(20, 5000),
    offers: Array.from({ length: getRandomInteger(1, 3) }, () => getRandomInteger(1, OFFERS.length)),
    isFavorite: true
  };

  return pointMockElement;
};

const getPointMockArray = () => Array.from({ length: POINTS_COUNT }, () => getPointMockElement());

const pointMockArray = getPointMockArray();

const getPointsData = () => pointMockArray;

export { getPointsData };


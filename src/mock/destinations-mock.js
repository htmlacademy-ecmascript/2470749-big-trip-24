import { CITIES, PICTURES, DESCRIPTION_TEXT } from './const-mock';
import { getRandomDescriptionPoint, getRandomInteger } from '../utils/common-utils';

let destinationId = 0;

const getDestinationsMock = (city) => {
  const destinationsMock = {
    id: destinationId,
    name: city,
    description: getRandomDescriptionPoint(DESCRIPTION_TEXT),
    pictures: [
      {
        src: PICTURES[getRandomInteger(0, 4)],
        description: `${city} parliament building`
      },
      {
        src: PICTURES[getRandomInteger(0, 4)],
        description: `${city} main square`
      },
      {
        src: PICTURES[getRandomInteger(0, 4)],
        description: `${city} best view`
      },
      {
        src: PICTURES[getRandomInteger(0, 4)],
        description: `${city} landscape`
      },
      {
        src: PICTURES[getRandomInteger(0, 4)],
        description: `${city} church`
      }
    ],
  };
  return destinationsMock;
};

const getDestinationsMockArray = () => {
  const destinationsMockArray = [];

  CITIES.forEach((city) => {
    destinationId++;
    destinationsMockArray.push(getDestinationsMock(city));
  });

  return destinationsMockArray;
};

const destinations = getDestinationsMockArray();

const getDestinations = () => destinations;

export { getDestinations };

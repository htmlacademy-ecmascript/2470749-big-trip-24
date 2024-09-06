import { getPoints } from '../mock/point-mock';
import { getDestinations } from '../mock/destinations-mock';

export default class PointModel {
  points = getPoints();
  destinations = getDestinations();

  getPoints() {
    return this.points;
  }
}

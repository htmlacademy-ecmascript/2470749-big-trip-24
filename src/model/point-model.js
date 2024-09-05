import { getPointsData } from '../mock/point-mock';

export default class PointModel {
  points = getPointsData();

  getPoints() {
    return this.points;
  }
}

import { getCopyOfPointMockArray } from "../mock/point-mock";

export default class PointModel {
  points = getCopyOfPointMockArray();

  getPoints() {
    return this.points;
  }
}

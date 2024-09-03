import { pointMockArray } from "../mock/point-mock";

export default class PointModel {
  points = pointMockArray;

  getPoints() {
    return this.points;
  }
}

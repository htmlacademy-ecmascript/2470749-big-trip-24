import { generateFilter } from "../mock/filter-mock";
import PointModel from "./point-model";
import Observable from "../framework/observable";
import { FilterType } from "../const";

export default class FiltersModel extends Observable {
  // #pointModel = new PointModel();
  // #filters = generateFilter(this.#pointModel.points);
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  set filter(filter) {
    this.#filter = filter;
  }
}

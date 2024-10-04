import Observable from '../framework/observable';
import { FilterType } from '../const';

export default class FiltersModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  set filter(filter) {
    this.#filter = filter;
  }
}

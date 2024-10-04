import { render, replace, remove } from '../framework/render';
import FiltersView from '../view/filters-view';
import FiltersModel from '../model/filters-model';
import { FilterType } from '../const';
import { filter } from '../utils/filter-utils';

export default class FiltersPresenter {
  #filtersModel = new FiltersModel();
  #filtersComponent = null;
  #filtersContainer = null;
  #pointModel = null;

  #currentFilter = FilterType.EVERYTHING;

  constructor({ filtersContainer, pointModel }) {
    this.#filtersContainer = filtersContainer;
    this.#pointModel = pointModel;
  }

  get filters() {
    const points = this.#pointModel.points;

    return Object.entries(filter).map(
      ([filterType, filterPoints]) => ({
        type: filterType,
        count: filterPoints(points).length,
      }),
    );

  }

  init() {
    const filters = this.filters;
    const prevFiltersComponent = this.#filtersComponent;

    this.#filtersComponent = new FiltersView({
      filters,
      onFiltersChange: this.#handleFiltersChange
    });

    if(prevFiltersComponent === null){
      render(this.#filtersComponent, this.#filtersContainer);
      return;
    }

    replace(this.#filtersComponent, prevFiltersComponent);
    remove(prevFiltersComponent);
  }

  #handleFiltersChange = (filterType) => {
    if (this.#currentFilter === filterType) {
      return;
    }

    this.#currentFilter = filterType;
    this.#filtersModel.filter = filterType;

    // проверка работает ли сортировка списка поинтов (для себя, потом удалю)
    const points = this.#pointModel.points;
    const filteredPoints = filter[this.#currentFilter](points);
    console.log(filteredPoints);
  };
}

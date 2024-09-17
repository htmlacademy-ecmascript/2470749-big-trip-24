import { capitalize } from './utils/util';
import AbstractView from '../framework/view/abstract-view';
import { FILTERS } from '../const';

const getFiltersItem = (filter) => `<div class="trip-filters__filter">
<input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}">
<label class="trip-filters__filter-label" for="filter-${filter}">${capitalize(filter)}</label>
</div>`;

function createFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
  ${FILTERS.map((filter) => getFiltersItem(filter)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FiltersView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}

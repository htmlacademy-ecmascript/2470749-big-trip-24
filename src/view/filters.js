import { createElement } from "../render";
import { getUpperCaseString } from "../util";

const FILTERS = [
  {
    name: 'everything',
    checked: ''
  },
  {
    name: 'future',
    checked: ''
  },
  {
    name: 'present',
    checked: ''
  },
  {
    name: 'past',
    checked: 'checked'
  }
];

const getFiltersItem = (filter) => {
  return `<div class="trip-filters__filter">
<input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.name}" ${filter.checked}>
<label class="trip-filters__filter-label" for="filter-${filter.name}">${getUpperCaseString(filter.name)}</label>
</div>`
}

console.log(getFiltersItem(FILTERS[3]))

function createNewFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
  ${FILTERS.map((filter) => getFiltersItem(filter)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`
}

export default class NewFilters {
  getTemplate() {
    return createNewFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

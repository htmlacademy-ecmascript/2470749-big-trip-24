import { capitalize } from '../utils/common-utils';
import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const';


const getSortingItems = (sorting) => ` <div class="trip-sort__item  trip-sort__item--${sorting}">
<input id="sort-${sorting}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorting}">
<label class="trip-sort__btn" for="sort-${sorting}" data-sort-type="${sorting}">${capitalize(sorting)}</label>
</div>`;

function createSortingTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${Object.values(SortType).map((sorting) => getSortingItems(sorting)).join('')}
  </form>`;
}


export default class SortingView extends AbstractView {
  #handleSortingClick = null;

  constructor({ onSortingClick }) {
    super();
    this.#handleSortingClick = onSortingClick;

    this.element.addEventListener('click', this.#sortingClickHandler);
  }

  get template() {
    return createSortingTemplate();
  }

  #sortingClickHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    evt.preventDefault();
    this.#handleSortingClick(evt.target.dataset.sortType);
  };
}

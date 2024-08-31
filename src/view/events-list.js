import { createElement } from "../render";

function createNewEventsListTemplate() {
  return `<ul class="trip-events__list"></ul>`
}

export default class NewEventsList {
  getTemplate() {
    return createNewEventsListTemplate();
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

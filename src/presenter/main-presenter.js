import NewEventsList from '../view/events-list';
import NewEditPoint from '../view/edit-point';
import NewCreatePoint from '../view/create-point';
import NewEventsItem from '../view/events-item';
import NewSorting from '../view/sorting';
import { render } from '../render';

const tripEvents = document.querySelector('.trip-events');

export default class MainPresenter {
  eventsListComponent = new NewEventsList();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new NewSorting(), tripEvents);
    render(this.eventsListComponent, this.eventsContainer);
    render(new NewEditPoint(), this.eventsListComponent.getElement());
    render(new NewCreatePoint(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewEventsItem(), this.eventsListComponent.getElement());
    }
  }
}

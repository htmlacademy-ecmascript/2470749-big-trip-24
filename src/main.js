import NewFilters from "./view/filters";
import NewTripInfo from "./view/trip-info";
import { RenderPosition, render } from "./render";
import EventsPresenter from "./presenter/main-presenter";

const tripMain = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const mainPresenter = new EventsPresenter({eventsContainer: tripEvents});

render(new NewTripInfo(), tripMain, RenderPosition.AFTERBEGIN);
render(new NewFilters(), tripFilters);

mainPresenter.init();

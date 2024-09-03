import NewFilters from './view/filters-view';
import NewTripInfo from './view/trip-info-view';
import { RenderPosition, render } from './render';
import MainPresenter from './presenter/main-presenter';
import './mock/point-mock';
import './mock/destination-mock';
import './mock/offers-mock';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const mainPresenter = new MainPresenter({pointsContainer: pointsContainer});

render(new NewTripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(new NewFilters(), filtersContainer);

mainPresenter.init();

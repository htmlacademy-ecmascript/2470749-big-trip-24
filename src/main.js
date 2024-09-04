import NewFilters from './view/filters-view';
import NewTripInfo from './view/trip-info-view';
import { RenderPosition, render } from './render';
import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const pointModel = new PointModel();
const mainPresenter = new MainPresenter({
  pointsContainer: pointsContainer,
  pointModel,
});


render(new NewTripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(new NewFilters(), filtersContainer);

mainPresenter.init();

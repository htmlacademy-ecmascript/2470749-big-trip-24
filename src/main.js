import NewFilters from './view/filters-view';
import NewTripInfo from './view/trip-info-view';
import { RenderPosition, render } from './framework/render';
import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';
import { generateFilter } from './mock/filter-mock';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const pointModel = new PointModel();
const mainPresenter = new MainPresenter({
  pointsContainer: pointsContainer,
  pointModel,
});
const filters = generateFilter(pointModel.points);

render(new NewTripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(new NewFilters({filters}), filtersContainer);

mainPresenter.init();

import NewTripInfo from './view/trip-info-view';
import { RenderPosition, render } from './framework/render';
import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import AddNewPointButtonView from './view/add-new-point-button-view';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const filtersModel = new FiltersModel();

const addNewPointButton = new AddNewPointButtonView({
  onClick: onNewPointButtonClick,
});

const mainPresenter = new MainPresenter({
  pointsContainer: pointsContainer,
  pointModel,
  filtersModel,
  onNewPointCancel: cancelNewPoint,
});

const filtersPresenter = new FiltersPresenter({
  filtersContainer: filtersContainer,
  pointModel,
  filtersModel,
});

render(new NewTripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(addNewPointButton, mainContainer);

function onNewPointButtonClick() {
  mainPresenter.createPoint();
}

function cancelNewPoint() {
  addNewPointButton.element.disabled = false;
}

filtersPresenter.init();
mainPresenter.init();

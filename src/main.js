import NewTripInfo from './view/trip-info-view';
import { RenderPosition, render } from './framework/render';
import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import AddNewPointButtonView from './view/add-new-point-button-view';
import PointsApiService from './points-api-service';

const AUTHORIZATION = 'Basic fjr3598kro54983dl';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});

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
  addNewPointButton.element.disabled = true;
}

function cancelNewPoint() {
  addNewPointButton.element.disabled = false;
}

filtersPresenter.init();
mainPresenter.init();

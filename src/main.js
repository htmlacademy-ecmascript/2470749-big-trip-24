import { render } from './framework/render';
import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import AddNewPointButtonView from './view/add-new-point-button-view';
import PointsApiService from './points-api-service';
import TripInfoPresenter from './presenter/trip-info-presenter';

const AUTHORIZATION = 'Basic fjr3598kro54883dl';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
  pointsContainer: pointsContainer,
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

const tripInfoPresenter = new TripInfoPresenter({
  pointModel: pointModel,
  mainContainer: mainContainer,
});

function onNewPointButtonClick() {
  mainPresenter.createPoint();
  addNewPointButton.element.disabled = true;
}

function cancelNewPoint() {
  addNewPointButton.element.disabled = false;
}

mainPresenter.init();

pointModel.init()
  .finally(() => {
    render(addNewPointButton, mainContainer);
    filtersPresenter.init();

    if (pointModel.points.length > 0) {
      tripInfoPresenter.init();
    }
  });



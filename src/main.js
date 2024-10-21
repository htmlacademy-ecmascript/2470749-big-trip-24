import MainPresenter from './presenter/main-presenter';
import PointModel from './model/point-model';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import PointsApiService from './points-api-service';
import TripInfoPresenter from './presenter/trip-info-presenter';

const AUTHORIZATION = 'Basic fjr3598kro5483dl';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
});

const filtersModel = new FiltersModel();

const mainPresenter = new MainPresenter({
  pointsContainer,
  mainContainer,
  pointModel,
  filtersModel,
});

const filtersPresenter = new FiltersPresenter({
  filtersContainer: filtersContainer,
  pointModel,
  filtersModel,
});

const tripInfoPresenter = new TripInfoPresenter({
  pointModel,
  mainContainer,
});

mainPresenter.init();

pointModel.init()
  .finally(() => {
    filtersPresenter.init();
    tripInfoPresenter.init();
  });



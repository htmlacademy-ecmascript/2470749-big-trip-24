import PointListView from '../view/point-list-view';
import EditPoint from '../view/edit-point-view';
import CreatePoint from '../view/create-point-view';
import PointItemView from '../view/point-item-view';
import SortingView from '../view/sorting-view';
import { render } from '../render';

export default class MainPresenter {
  pointsListComponent = new PointListView();

  constructor({pointsContainer, pointModel}) {
    this.pointsContainer = pointsContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    this.destinations = [...this.pointModel.getDestinations()];
    this.offers = [...this.pointModel.getOffers()];

    render(new SortingView(), this.pointsContainer);
    render(this.pointsListComponent, this.pointsContainer);
    render(new EditPoint({point: this.points[0], offers: this.offers, destinations: this.destinations}), this.pointsListComponent.getElement());
    render(new CreatePoint(), this.pointsListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointItemView({point: this.points[i], offers: this.offers, destinations: this.destinations}), this.pointsListComponent.getElement());
    }
  }
}

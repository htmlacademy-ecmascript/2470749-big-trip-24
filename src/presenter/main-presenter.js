import PointListView from '../view/point-list-view';
import EditPoint from '../view/edit-point-view';
import CreatePoint from '../view/create-point-view';
import PointItemView from '../view/point-item-view';
import SortingView from '../view/sorting-view';
import { render } from '../render';

export default class MainPresenter {
  pointsListComponent = new PointListView();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new SortingView(), this.pointsContainer);
    render(this.pointsListComponent, this.pointsContainer);
    render(new EditPoint(), this.pointsListComponent.getElement());
    render(new CreatePoint(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointItemView(), this.pointsListComponent.getElement());
    }
  }
}

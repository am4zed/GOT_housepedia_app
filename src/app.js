const Houses = require('./models/houses.js');
const HouseListView = require('./views/house_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const houseListContainer = document.querySelector('#house-list-view-wrapper');
  const houseListView = new HouseListView(houseListContainer);
  houseListView.bindEvents;

  const houses = new Houses();
  houses.getData();
};

const Houses = require('./models/houses.js');
const HouseListView = require('./views/house_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listContainer = document.querySelector('#house-list-view-wrapper');
  const houseListView = new HouseListView(listContainer);
  houseListView.bindEvents();

  const houses = new Houses();
  houses.getData();

});

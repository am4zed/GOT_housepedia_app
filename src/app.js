const Houses = require('./models/houses.js');
const HouseListView = require('./views/house_list_view.js');
const SelectView = require('./views/select_view.js');
const ErrorView = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listContainer = document.querySelector('#house-list-view-wrapper');
  const houseListView = new HouseListView(listContainer);
  houseListView.bindEvents();

  const errorView = new ErrorView(listContainer);
  errorView.bindEvents();

  const select = document.querySelector('#house-select');
  const houseSelectView = new SelectView(select);
  houseSelectView.bindEvents();

  const houses = new Houses;
  houses.bindEvents();
  houses.getData();

});

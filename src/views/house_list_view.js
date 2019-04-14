const PubSub = require('../helpers/pub_sub.js');
const HouseView = require('./house_view.js');

const HouseListView = function(container){
  this.container = container;
};


HouseListView.prototype.bindEvents = function(){
  PubSub.subscribe('Houses:house-data-ready', (evt)=>{
    this.render(evt.detail);
  });
  PubSub.subscribe('Houses:regional-house-data-ready', (evt) => {
    this.render(evt.detail);
  });
};

HouseListView.prototype.render = function (data) {
  this.container.innerHTML = '';
  data.forEach((house)=>{
    const houseView = new HouseView(this.container, house);
    houseView.render();
  });
};

module.exports = HouseListView;

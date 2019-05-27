
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Houses = function(){
  this.data = null;
  this.regions = null;
};

Houses.prototype.getData = function () {
  const helper = new RequestHelper('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50');

    helper.get()
      .then( (houseData) => {
        this.data = houseData;
        const regions = this.getRegions();
        this.regions = regions;
        PubSub.publish('Houses:house-data-ready', this.data);
        PubSub.publish('Houses:region-data-ready', this.regions);
      })
      .catch((err)=>{
        PubSub.publish('Houses:error', err);
      });
};

Houses.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:region-selection-made', (evt) => {
    const houses = this.getHousesInRegion(evt.detail);
  PubSub.publish('Houses:regional-house-data-ready', houses);
  });
};

Houses.prototype.getHousesInRegion = function (index) {
  const region = this.regions[index];
  const housesInRegion = this.data.filter( (house) => {
    return house.region === region;
  });
  return housesInRegion;
};

Houses.prototype.getRegions = function () {
  const regions = this.data
  .map((house)=>{
    return house.region;
  })
  .filter((region, index, regions)=>{
    return index === regions.indexOf(region);
  })
  return regions;
};

module.exports = Houses;

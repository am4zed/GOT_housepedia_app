const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Houses = function(){
  this.data = null;
  this.regions = null;
};

Houses.prototype.getData = function () {
  const helper = new RequestHelper('https://www.anapioficeandfire.com/api/houses');

    helper.get()
      .then( (houseData) => {
        this.data = houseData;
        console.log(this.data);
        // const regions = this.getRegions();
        // this.regions = regions;
        PubSub.publish('Houses:house-data-ready', this.data);
        // PubSub.publish('Houses:region-data-ready', this.houseNames);
      });
      // .catch((err)=>{
      //   PubSub.publish('Houses:error', err);
      // });
};

module.exports = Houses;

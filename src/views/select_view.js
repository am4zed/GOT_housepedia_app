const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (select) {
  this.select = select;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Houses:region-data-ready', (regions) => {
    this.populate(regions.detail);
  });

  this.select.addEventListener('change', (evt) => {
    PubSub.publish('SelectView:region-selection-made', evt.target.value);
  });
};

SelectView.prototype.populate = function (regions) {
  regions.forEach( (region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.select.appendChild(option);
  })
};

module.exports = SelectView;

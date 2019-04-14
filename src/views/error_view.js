const PubSub = require('../helpers/pub_sub.js');

const ErrorView = function (container) {
  this.container = container;
};

ErrorView.prototype.bindEvents = function () {
  PubSub.subscribe('House:error', ()=>{
    this.render();
  });
};

ErrorView.prototype.render = function () {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'SHAME! SHAME! An error has been made in Westeros.'
  this.container.appendChild(errorMessage);
};

module.exports = ErrorView;

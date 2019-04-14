const HouseView = function(container, house){
  this.container = container;
  this.house = house;
};

HouseView.prototype.render = function () {
  const houseContainer = document.createElement('div');
  houseContainer.classList.add('house-container');
  this.container.appendChild(houseContainer);

  const houseHeading = this.createHeading();
  houseContainer.appendChild(houseHeading);

  const houseInfo = this.createInfo();
  houseContainer.appendChild(houseInfo);
};

HouseView.prototype.createHeading = function () {
  const heading = document.createElement('h2');
  heading.textContent = this.house.name;
  return heading;
};

HouseView.prototype.createInfo = function () {
  const infoSection = document.createElement('div');

  const region = document.createElement('p');
  region.textContent = `Region: ${this.house.region}`;
  infoSection.appendChild(region);

  const coatOfArms = document.createElement('p');
  coatOfArms.textContent = `Coat of Arms: ${this.house.coatOfArms}`;
  infoSection.appendChild(coatOfArms);

  const words = document.createElement('p');
  words.textContent = `Words: ${this.house.words}`;
  infoSection.appendChild(words);

  return infoSection;
};

module.exports = HouseView;

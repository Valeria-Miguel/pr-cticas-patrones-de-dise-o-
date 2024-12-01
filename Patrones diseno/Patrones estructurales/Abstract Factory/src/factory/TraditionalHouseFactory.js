const HouseFactory = require('./HouseFactory');
const TraditionalDoor = require('../products/TraditionalDoor');
const TraditionalWindow = require('../products/TraditionalWindow');

class TraditionalHouseFactory extends HouseFactory {
  // creamos la puerta tradicional aqui
  createDoor() {
    return new TraditionalDoor();
  }
  
  // y la ventana tradicional aca
  createWindow() {
    return new TraditionalWindow();
  }
}

module.exports = TraditionalHouseFactory;

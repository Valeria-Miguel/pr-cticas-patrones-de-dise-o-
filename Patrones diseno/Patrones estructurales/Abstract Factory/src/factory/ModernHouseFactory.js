const HouseFactory = require('./HouseFactory');
const ModernDoor = require('../products/ModernDoor');
const ModernWindow = require('../products/ModernWindow');

class ModernHouseFactory extends HouseFactory {
  // creamos la puerta moderna usando la clase concreta
  createDoor() {
    return new ModernDoor();
  }
  
  // hacemos lo mismo para la ventana moderna
  createWindow() {
    return new ModernWindow();
  }
}

module.exports = ModernHouseFactory;

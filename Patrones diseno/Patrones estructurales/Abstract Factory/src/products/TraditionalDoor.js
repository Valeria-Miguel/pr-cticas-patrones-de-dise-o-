const Door = require('./Door');

class TraditionalDoor extends Door {
  // esta es la puerta tradicional con detalles de madera
  describe() {
    return 'puerta tradicional de madera con detalles tallados.';
  }
}

module.exports = TraditionalDoor;

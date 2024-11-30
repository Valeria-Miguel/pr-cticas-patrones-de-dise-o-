const Coche = require('../models/Coche.js');
const Camion = require('../models/Camion.js');
const Motocicleta = require('../models/Motocicleta.js');

class VehiculoFactory {
  static crearVehiculo(tipo) {
    switch (tipo) {
      case 'Coche':
        return new Coche();
      case 'Camion':
        return new Camion();
      case 'Motocicleta':
        return new Motocicleta();
      default:
        throw new Error('Tipo de vehículo no reconocido');
    }
  }
}

module.exports = VehiculoFactory;


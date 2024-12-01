const Transport = require('../Transport');
//aqui toma todo lo que tiene la clase Transport y le agrega los detalles específicos para los carros.
class Car extends Transport {
  getDetails() {
    return `${this.model} es un automóvil que puede transportar personas a distancias medias.`;
  }
}

module.exports = Car;

const Transport = require('../Transport');

//aqui toma todo lo que tiene la clase Transport y le agrega los detalles específicos para los autobuses.
 
class Bus extends Transport {
  getDetails() {
    return `${this.model} es un autobús que puede transportar muchas personas a lugares lejanos.`;
  }
}

module.exports = Bus;

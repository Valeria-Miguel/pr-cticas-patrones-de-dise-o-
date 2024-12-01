const Transport = require('../Transport');
// esta es la clase para las bicicletas, se basa en Transport para compartir las propiedades comunes
// y luego define su propio detalle con el método getDetails
class Bike extends Transport {
  getDetails() {
    return `${this.model} es una bicicleta ideal para trayectos cortos y de bajo impacto.`; // da los detalles de la bici
  }
}

module.exports = Bike;

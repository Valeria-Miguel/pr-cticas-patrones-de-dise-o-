const Bike = require('../modules/Bike');

//crea objetos de bicibleta 
// cuando se le pase un "modelo", va a crear una nueva bici con ese modelo
class BikeFactory {
  createTransport(model) {
    return new Bike(model); // crea la bici con el modelo que se le da
  }
}

module.exports = BikeFactory;


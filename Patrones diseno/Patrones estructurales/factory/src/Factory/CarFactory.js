const Car = require('../modules/Car');
//crea objetos de autobus 
// cuando se le pase un "modelo", va a crear una nuevo bus con ese modelo
class CarFactory {
  createTransport(model) {
    return new Car(model);// crea el carro con el modelo que se le da
  }
}

module.exports = CarFactory;

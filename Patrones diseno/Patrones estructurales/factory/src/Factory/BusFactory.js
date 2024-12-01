const Bus = require('../modules/Bus');
//crea objetos de autobus 
// cuando se le pase un "modelo", va a crear una nuevo bus con ese modelo
class BusFactory {
  
  createTransport(model) {
    return new Bus(model);// crea el bus con el modelo que se le da
  }
}

module.exports = BusFactory;

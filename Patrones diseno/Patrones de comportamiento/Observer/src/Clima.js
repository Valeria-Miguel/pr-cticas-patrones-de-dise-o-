const Sujeto = require('./Sujeto');
//la clase se extiende de sujeto para que puedaayudarmos a notificar
class Clima extends Sujeto {
  constructor() {
    super();
    this.temperatura = 20; // temperatura inicial en grados Celsius
    this.humedad = 50;     // humedad inicial en porcentaje
  }
//metodo de cambio de temperatura y notifica alos observadores
  cambiarTemperatura(nuevaTemperatura) {
    this.temperatura = nuevaTemperatura;
    this.notificarObservadores();
  }
//metodo de cambio de humedad y notifica alos observadores
  cambiarHumedad(nuevaHumedad) {
    this.humedad = nuevaHumedad;
    this.notificarObservadores();
  }
//metodo para obtenertemperatur actual
  getTemperatura() {
    return this.temperatura;
  }
//metodo para obtener humedad actual
  getHumedad() {
    return this.humedad;
  }
}

module.exports = Clima;

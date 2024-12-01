// Clima.js

const Sujeto = require('./Sujeto');

class Clima extends Sujeto {
  constructor() {
    super();
    this.temperatura = 20; // temperatura inicial en grados Celsius
    this.humedad = 50;     // humedad inicial en porcentaje
  }

  cambiarTemperatura(nuevaTemperatura) {
    this.temperatura = nuevaTemperatura;
    this.notificarObservadores();
  }

  cambiarHumedad(nuevaHumedad) {
    this.humedad = nuevaHumedad;
    this.notificarObservadores();
  }

  getTemperatura() {
    return this.temperatura;
  }

  getHumedad() {
    return this.humedad;
  }
}

module.exports = Clima;

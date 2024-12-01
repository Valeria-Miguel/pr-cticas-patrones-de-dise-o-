// Tortuga.js

const Observador = require('./Observador');
const Clima = require('./Clima');

class Tortuga extends Observador {
  constructor(clima) {
    super();
    this.clima = clima;
    this.clima.agregarObservador(this);
  }

  actualizar() {
    const humedad = this.clima.getHumedad();
    if (humedad < 40) {
      console.log('La tortuga se está escondiendo porque está muy seco.');
    } else {
      console.log('La tortuga está contenta porque hay suficiente humedad.');
    }
  }
}

module.exports = Tortuga;

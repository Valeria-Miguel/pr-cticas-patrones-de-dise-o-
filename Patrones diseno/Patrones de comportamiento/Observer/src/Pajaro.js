// Pajaro.js

const Observador = require('./Observador');

class Pajaro extends Observador {
  constructor(clima) {
    super();
    this.clima = clima;
    this.clima.agregarObservador(this);
  }

  actualizar() {
    const temperatura = this.clima.getTemperatura();
    if (temperatura > 25) {
      console.log('El pájaro está cantando porque hace buen tiempo.');
    } else {
      console.log('El pájaro está callado porque hace frío.');
    }
  }
}

module.exports = Pajaro;

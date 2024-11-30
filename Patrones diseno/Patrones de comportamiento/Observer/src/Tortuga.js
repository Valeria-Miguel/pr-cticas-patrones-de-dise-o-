const Observador = require('./Observador');
const Clima = require('./Clima');
//se extiende de observaodr y se registra en la clase como observador en clima
class Tortuga extends Observador {
  constructor(clima) {
    super();
    this.clima = clima; //guardamos en clima
    this.clima.agregarObservador(this);//se va a observador
  }
//se actuaiza para mostrar los cmabio s
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

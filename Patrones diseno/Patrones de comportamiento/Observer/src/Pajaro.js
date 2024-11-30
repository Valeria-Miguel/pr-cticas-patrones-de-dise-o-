const Observador = require('./Observador');
//se extiende de observaodr y se registra en la clase como observador en clima
class Pajaro extends Observador {
  constructor(clima) {
    super();
    this.clima = clima;// se guarda en clima
    this.clima.agregarObservador(this);//se va a observador
  }
//se actuaiza para mostrar los cmabio s
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

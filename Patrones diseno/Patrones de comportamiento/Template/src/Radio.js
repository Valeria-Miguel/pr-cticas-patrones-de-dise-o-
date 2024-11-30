// clase concreta que implementa los pasos específicos para encender una radio
const DispositivoElectronico = require('./DispositivoElectronico');

class Radio extends DispositivoElectronico {
    //muestra el paso especifico
  activarDispositivo() {
    console.log("Encendiendo la radio...");
  }
//muestra el paso especifico
  mostrarEstado() {
    console.log("La radio está encendida y transmitiendo sonido.");
  }
}

module.exports = Radio;

// clase concreta que implementa los pasos específicos para encender una televisión
const DispositivoElectronico = require('./DispositivoElectronico');

class Television extends DispositivoElectronico {
    //implementa el paso especifico
  activarDispositivo() {
    console.log("Encendiendo la televisión...");
  }
//muestra el paso especifico
  mostrarEstado() {
    console.log("La televisión está encendida y mostrando la imagen.");
  }
}

module.exports = Television;

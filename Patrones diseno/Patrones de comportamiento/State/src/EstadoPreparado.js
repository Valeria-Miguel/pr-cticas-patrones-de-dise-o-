const Estado = require('./Estado');
const EstadoSinAgua = require('./EstadoSinAgua');

class EstadoPreparando extends Estado {
  // cuando el café ya esta listo
  manejarSolicitud(contexto) {
    console.log("café listo. disfruta!");
    // cambiamos a estado "sin agua"
    contexto.cambiarEstado(new EstadoSinAgua());
  }
}

module.exports = EstadoPreparando;

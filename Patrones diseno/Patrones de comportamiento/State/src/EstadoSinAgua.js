const Estado = require('./Estado');
const EstadoListo = require('./EstadoListo');

class EstadoSinAgua extends Estado {
  // si no hay agua en la maquina
  manejarSolicitud(contexto) {
    console.log("sin agua. por favor, llena el tanque.");
    // volvemos al estado "listo" para poder preparar el café de nuevo
    contexto.cambiarEstado(new EstadoListo());
  }
}

module.exports = EstadoSinAgua;

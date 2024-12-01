//este estado representa cuando la maquina esta preparando el café
const Estado = require('./Estado');
const EstadoSinAgua = require('./EstadoSinAgua');

class EstadoPreparando extends Estado {
  //el comportamiento de este estado es preparar el café
  manejarSolicitud(contexto) {
    console.log("café listo. disfruta!");
    //dspues de preparar el café, cambiamos al estado "sin agua"
    contexto.cambiarEstado(new EstadoSinAgua());
  }
}

module.exports = EstadoPreparando;

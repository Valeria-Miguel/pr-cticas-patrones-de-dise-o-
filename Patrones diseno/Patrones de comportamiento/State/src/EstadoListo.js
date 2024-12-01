
const Estado = require('./Estado');
const EstadoPreparando = require('./EstadoPreparando');

class EstadoListo extends Estado {
  // cuando la maquina esta lista, se prepara el cafe
  manejarSolicitud(contexto) {
    console.log("preparando el café...");
    // cambiamos de estado a "preparando"
    contexto.cambiarEstado(new EstadoPreparando());
  }
}

module.exports = EstadoListo;

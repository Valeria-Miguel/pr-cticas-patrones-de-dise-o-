const EstadoListo = require('./EstadoListo');

class MaquinaCafe {
  constructor() {
    // inicializamos la maquina con el estado listo
    this.estado = new EstadoListo(); 
  }

  // metodo para cambiar el estado de la maquina
  cambiarEstado(estado) {
    this.estado = estado;
  }

  // metodo que maneja la solicitud de preparar el cafe
  solicitud() {
    this.estado.manejarSolicitud(this);
  }
}

module.exports = MaquinaCafe;

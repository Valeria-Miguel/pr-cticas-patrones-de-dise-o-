//La maquina de café tiene un estado que cambia dependiendo de lo que esté pasando

const EstadoListo = require('./EstadoListo');//traemos el estado "Listo", que es el inicial de la máquina de café
class MaquinaCafe {
 //el constructor crea la maquina de cafe, la cual empieza con el estado "Listo"
 constructor() {
    this.estado = new EstadoListo();
  }
//aqui se va cambiando el estado de la maquina de cafe
  cambiarEstado(estado) {
    this.estado = estado;
  }
//aqui se manejan las solitudes para ahcer cafe
  solicitud() {
    this.estado.manejarSolicitud(this);
  }
}

module.exports = MaquinaCafe;

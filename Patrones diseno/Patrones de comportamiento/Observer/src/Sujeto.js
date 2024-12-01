// Sujeto.js

class Sujeto {
    constructor() {
      this.observadores = [];
    }
  
    // método para agregar un observador
    agregarObservador(observador) {
      this.observadores.push(observador);
    }
  
    // método para eliminar un observador
    eliminarObservador(observador) {
      this.observadores = this.observadores.filter(obs => obs !== observador);
    }
  
    // método para notificar a todos los observadores
    notificarObservadores() {
      this.observadores.forEach(observador => observador.actualizar());
    }
  }
  
  module.exports = Sujeto;
  
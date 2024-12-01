class Sujeto {
    constructor() {
      this.observadores = [];
    }
  
    //metodo para agregar un observador
    agregarObservador(observador) {
      this.observadores.push(observador);
    }
  
    //metodo para eliminar un observador
    eliminarObservador(observador) {
      this.observadores = this.observadores.filter(obs => obs !== observador);
    }
  
    //metodo para notificar a todos los observadors
    notificarObservadores() {
      this.observadores.forEach(observador => observador.actualizar());
    }
  }
  
  module.exports = Sujeto;
  

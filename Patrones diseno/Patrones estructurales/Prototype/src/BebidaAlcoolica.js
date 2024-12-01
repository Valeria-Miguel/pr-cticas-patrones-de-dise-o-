class BebidaAlcoolica {
    constructor(nombre, tipo, gradoAlcohol) {
      this.nombre = nombre;//nombre del alcohol
      this.tipo = tipo;//tipo de alcohol 
      this.gradoAlcohol = gradoAlcohol;
    }
  
    // mtodo para clonar la bebida
    clonar() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  
    // metodo para mostrar los detalles de la bebida
    mostrarDetalles() {
      console.log(`Bebida: ${this.nombre}, Tipo: ${this.tipo}, Grado Alcohólico: ${this.gradoAlcohol}%`);
    }
  }
  
  module.exports = BebidaAlcoolica;
  
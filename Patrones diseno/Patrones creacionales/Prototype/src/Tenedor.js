// lo mismo que cuchillo
const Utensilio = require('./Utensilio');

class Tenedor extends Utensilio {
  constructor(material, tamano, dientes) {//se llama al constructor de la clase base Utensilio para inicializar el material y tamaño
    super(material, tamano);
    this.dientes = dientes;//ademas inicializa el filo específico del tenedor
  }

  clonar() {//se implementa el método clonar para crear una copia del tenerdot actual
    //se crea una nueva instancia de tenerdot con los mismos valores de material, tamaño y filo.
    return new Tenedor(this.material, this.tamano, this.dientes);
  }

  mostrar() {
    //se implementa el metodo mostrar para imprimir los detalles del tenedor
    console.log(`Tenedor: Material: ${this.material}, Tamaño: ${this.tamano}, Dientes: ${this.dientes}`);
  }
}

module.exports = Tenedor;

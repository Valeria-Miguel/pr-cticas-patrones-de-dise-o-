const Utensilio = require('./Utensilio');

class Cuchillo extends Utensilio {
  constructor(material, tamano, filo) {
   //se llama al constructor de la clase base Utensilio para inicializar el material y tamaño
   super(material, tamano); this.filo = filo; //ademas inicializa el filo específico del cuchillo
   }
   clonar() { //se implementa el método clonar para crear una copia del cuchillo actual
    //se crea una nueva instancia de Cuchillo con los mismos valores de material, tamaño y filo.
    return new Cuchillo(this.material, this.tamano, this.filo); } 
    mostrar() { 
        //se implementa el metodo mostrar para imprimir los detalles del cuchillo
         console.log(`Cuchillo: Material: ${this.material}, Tamaño: ${this.tamano}, Filo: ${this.filo}`); 
        } 
    }

module.exports = Cuchillo;

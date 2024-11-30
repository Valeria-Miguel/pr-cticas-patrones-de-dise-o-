
//Clase que representa la pizza que queremos construir
class Pizza {
    constructor() {
      this.ingredientes = [];
    }
  
    //metodo para agregar un ingrediente a la pizza
    agregarIngrediente(ingrediente) {
      this.ingredientes.push(ingrediente);
    }
  
    //metodo para mostrar los ingredientes de la pizza
    mostrarIngredientes() {
      console.log("Ingredientes de la pizza: " + this.ingredientes.join(", "));
    }
  }
  
  module.exports = Pizza;
  
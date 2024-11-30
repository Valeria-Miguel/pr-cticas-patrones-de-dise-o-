const Pizza = require('./Pizza');
//clase constructora que proporciona métodos para construir la pizza
class PizzaBuilder {
  constructor() {
    //inicializamos una nueva instancia de Pizza
    this.pizza = new Pizza();
  }

  //Metodo para agregar queso a la pizza
  agregarQueso() {
    this.pizza.agregarIngrediente("Queso");
    return this; //cevolvemos this para permitir el encadenamiento de llamadas
  }

  //Metodo para agregar pepperoni a la pizza
  agregarPepperoni() {
    this.pizza.agregarIngrediente("Pepperoni");
    return this;
  }

  //Metodo para agregar aceitunas a la pizza
  agregarAceitunas() {
    this.pizza.agregarIngrediente("Aceitunas");
    return this;
  }

  //Metodo para agregar champiñones a la pizza
  agregarChampinones() {
    this.pizza.agregarIngrediente("Champiñones");
    return this;
  }

  //Metodo para construir y devolver la pizza final
  construir() {
    return this.pizza;
  }
}

module.exports = PizzaBuilder;

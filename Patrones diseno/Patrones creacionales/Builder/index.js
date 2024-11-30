const PizzaBuilder = require('./src/PizzaBuilder');

// construir una pizza con queso y pepperoni
const pizzaBuilder1 = new PizzaBuilder();
const pizza1 = pizzaBuilder1.agregarQueso().agregarPepperoni().construir();
pizza1.mostrarIngredientes();

// construir una pizza con queso, aceitunas y champiñones
const pizzaBuilder2 = new PizzaBuilder();
const pizza2 = pizzaBuilder2.agregarQueso().agregarAceitunas().agregarChampinones().construir();
pizza2.mostrarIngredientes();

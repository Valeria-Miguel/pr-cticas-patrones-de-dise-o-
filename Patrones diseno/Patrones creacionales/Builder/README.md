Patrón de Diseño Builder
Builder es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.
https://refactoring.guru/es/design-patterns/builder
entonces en el ejercicio lo implemente para hacer pizzas agregandoles ingredientes, asi se podrian crear distintos sabores de pizza usando la misma estructutra para crear la pizza
El código consta de tres archivos principales:
-**Pizza.js**:representa el objeto final que queremos construir "la pizza" esta clase contiene una lista de ingredientes y métodos para interactuar con ella (agregar ingredientes y mostrarlos)
-**PizzaBuilder.js**:Implementa el patrón Builder(construir), proporciona métodos especificos para añadir ingredientes a la pizza ( queso, pepperoni, aceitunas) y finalmente construir la pizza y en el metodo construir devuelve la pizza completa
-**index.js**: muestra se pueden construir diferentes de pizzas y luego mostrar sus ingredientes.
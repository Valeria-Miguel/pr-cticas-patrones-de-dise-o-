const ModernHouseFactory = require('./src/factory/ModernHouseFactory');
const TraditionalHouseFactory = require('./src/factory/TraditionalHouseFactory');

function describeHouse(factory) {
  // creamos la puerta y la ventana usando la fabrica que se le pase a la funcion
  const door = factory.createDoor();
  const window = factory.createWindow();

  // mostramos como son las cosas creadas
  console.log(door.describe());
  console.log(window.describe());
}

console.log('descripción de casa moderna:');
describeHouse(new ModernHouseFactory());

console.log('descripción de casa tradicional:');
describeHouse(new TraditionalHouseFactory());

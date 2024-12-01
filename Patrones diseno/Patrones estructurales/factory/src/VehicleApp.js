const readline = require('readline');
const CarFactory = require('./Factory/CarFactory');
const BikeFactory = require('./Factory/BikeFactory');
const BusFactory = require('./Factory/BusFactory');

// crea una interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let transportsList = [];

//Funcion para crear un transporte segun el tipo y modelo que se le pasa
 
function createAndDisplayVehicle(type, model) {
  let transportFactory;

  // Dependiendo del tipo de transporte, se usa la fabrica correspondiente
  if (type === 'carro') {
    transportFactory = new CarFactory();
  } else if (type === 'bicicleta') {
    transportFactory = new BikeFactory();
  } else if (type === 'autobus') {
    transportFactory = new BusFactory();
  } else {
    console.log('Tipo de transporte inválido.');
    return;
  }

  // se crea el objeto de transporte con la fabrica seleccionada
  const transport = transportFactory.createTransport(model);
  transportsList.push(transport);

  // Muestra información del transporte creado
  console.log(`\nSe ha creado un transporte: Modelo ${model}, Tipo ${type}`);
  console.log(`Descripción: ${transport.getDescription()}`);
  console.log(`Detalles: ${transport.getDetails()}`);
}

//funcion dondea se muestran los transportes creados
function showTransports() {
  console.log('\nLista de transportes registrados:');
  if (transportsList.length === 0) {
    console.log('No hay transportes registrados.');
    return;
  }

  // muestra los transportes registrados en lista
  transportsList.forEach((transport, index) => {
    console.log(`${index + 1}. Modelo: ${transport.model} - Descripción: ${transport.getDescription()} - Detalles: ${transport.getDetails()}`);
  });
}

//funcion donde se pide el tipo de transporte
function promptForType() {
  rl.question('Selecciona el tipo de transporte (carro, bicicleta, autobus): ', (type) => {
    //vuelve a preguntar si no mete un tipo
    if (!['carro', 'bicicleta', 'autobus'].includes(type.toLowerCase())) {
      console.log('Tipo de transporte inválido.');
      return promptForType(); //vuelve a preguntar si no mete un tipo
    }

    // si esta bien el tipo continua con preguntar
    promptForModel(type.toLowerCase());
  });
}

//qui se pide el modelo del transporte
function promptForModel(type) {
  rl.question('Ingresa el modelo del transporte: ', (model) => {
    // se crea y se muestran los transportes regitrados
    createAndDisplayVehicle(type, model);
    showTransports();
    promptForType(); //se repite el proceso
  });
}

//inicializa el programa y muestra el mensje
function start() {
  console.log("\nBienvenido a la aplicación de gestión de transportes.");
  promptForType();
}

// se exporta funciones para ser usadas en otras partes 
module.exports = {
  start,
  createAndDisplayVehicle,
  showTransports,
};

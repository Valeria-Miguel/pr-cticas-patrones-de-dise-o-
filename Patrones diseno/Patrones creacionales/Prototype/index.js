const Cuchillo = require('./src/Cuchillo');
const Tenedor = require('./src/Tenedor');

// crear un cuchillo con sus caracteristicas
const cuchillo1 = new Cuchillo('acero inoxidable', 'grande', 'afilado');
//se crea un clon del cuchillo utilizando el método clonar.
const cuchilloClonado = cuchillo1.clonar();
// se muestra los detalles del cuchillo original y su clon.
cuchillo1.mostrar();
cuchilloClonado.mostrar();

// crear un tenedor con las caracteristicas
const tenedor1 = new Tenedor('plástico', 'mediano', 4);
const tenedorClonado = tenedor1.clonar();
//se muestra los detalles del tenedor original y clon
tenedor1.mostrar();
tenedorClonado.mostrar();

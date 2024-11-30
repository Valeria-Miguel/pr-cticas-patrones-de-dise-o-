const VehiculoFactory = require('./src/factory/VehiculoFactory.js');
// Crear diferentes vehículos usando la fábrica
const coche = VehiculoFactory.crearVehiculo('Coche');
console.log(coche.tipo); // Coche
coche.conducir(); // Conduciendo un coche...
const camion = VehiculoFactory.crearVehiculo('Camion');
console.log(camion.tipo); // Camion
camion.conducir(); // Conduciendo un camión...
const motocicleta = VehiculoFactory.crearVehiculo('Motocicleta');
console.log(motocicleta.tipo); // Motocicleta
motocicleta.conducir(); // Conduciendo una motocicleta...

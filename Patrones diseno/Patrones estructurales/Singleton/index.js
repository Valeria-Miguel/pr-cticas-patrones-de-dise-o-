const readline = require('readline');
const Hotel = require('./src/Hotel');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// obtenemos la instancia unica del hotel
const hotel = Hotel.getInstance();

//función para verificar el estado de una habitación
function verificarHabitacion() {
  rl.question('Ingresa el número de la habitación que deseas verificar: ', (numero) => {
    numero = parseInt(numero, 10);
    if (hotel.estaOcupada(numero)) {
      console.log(`La habitación ${numero} está ocupada.`);
    } else {
      console.log(`La habitación ${numero} está libre.`);
    }
    rl.close();
  });
}

// mostramos todas las reservas actuales
hotel.mostrarReservas();
// iniciamos la verificación de la habitación
verificarHabitacion();

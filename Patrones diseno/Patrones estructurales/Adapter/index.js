const readline = require('readline');
const CelsiusSensor = require('./src/CelsiusSensor');
const TemperatureAdapter = require('./src/TemperatureAdapter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// función para solicitar la temperatura en grados Celsius y convertirla a Fahrenheit
function solicitarTemperatura() {
  rl.question('Ingresa la temperatura en grados Celsius: ', (temperatura) => {
    const celsiusSensor = new CelsiusSensor(parseFloat(temperatura));
    const adapter = new TemperatureAdapter(celsiusSensor);
    
    const fahrenheitTemperature = adapter.getTemperatureFahrenheit();
    console.log(`La temperatura en Fahrenheit es: ${fahrenheitTemperature}`);
    
    rl.question('¿Deseas ingresar otra temperatura? (si/no): ', (respuesta) => {
      if (respuesta.toLowerCase() === 'si') {
        solicitarTemperatura();
      } else {
        rl.close();
      }
    });
  });
}

// inicia el proceso de solicitud de temperatura
solicitarTemperatura();

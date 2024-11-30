const Clima = require('./src/Clima');//importamos clases 
const Pajaro = require('./src/Pajaro');
const Tortuga = require('./src/Tortuga');
//configuramos readline para leer la entrada del usuario desde la terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Cremos instancias y se aagregan al clima 
const clima = new Clima();
const pajaro = new Pajaro(clima);
const tortuga = new Tortuga(clima);

//para solicitar los cambios en el clima
function solicitarCambiosClimaticos() {
  rl.question('Ingresa la nueva temperatura en grados Celsius: ', (nuevaTemperatura) => {
    clima.cambiarTemperatura(parseFloat(nuevaTemperatura));

    rl.question('Ingresa la nueva humedad en porcentaje: ', (nuevaHumedad) => {
      clima.cambiarHumedad(parseFloat(nuevaHumedad));

      rl.question('¿Deseas ingresar más cambios climáticos? (si/no): ', (respuesta) => {
        if (respuesta.toLowerCase() === 'si' || respuesta.toLowerCase() === 's') {
          solicitarCambiosClimaticos();
        } else {
          rl.close();
        }
      });
    });
  });
}

// inicia el proceso de solicitud de cambios climáticos
solicitarCambiosClimaticos();

const readline = require('readline');
const BebidaAlcoolica = require('./src/BebidaAlcoolica');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//funcion para solicitar la información de la bebida y clonarla
function solicitarBebida() {
  rl.question('Ingresa el nombre de la bebida: ', (nombre) => {
    rl.question('Ingresa el tipo de bebida: ', (tipo) => {
      rl.question('Ingresa el grado alcohólico de la bebida: ', (gradoAlcohol) => {
        //crear la bebida base
        let bebidaBase = new BebidaAlcoolica(nombre, tipo, parseFloat(gradoAlcohol));
        
        //clonar la bebida base
        let bebidaClonada = bebidaBase.clonar();

        // mostrar los detalles de ambas bebidas
        console.log('\nDetalles de la bebida original:');
        bebidaBase.mostrarDetalles();

        console.log('\nDetalles de la bebida clonada:');
        bebidaClonada.mostrarDetalles();
        
        rl.question('¿Deseas ingresar otra bebida? (si/no): ', (respuesta) => {
          if (respuesta.toLowerCase() === 'si' || respuesta.toLowerCase() === 's') {
            solicitarBebida();
          } else {
            rl.close();
          }
        });
      });
    });
  });
}

// inicia el proceso de solicitud de bebida
solicitarBebida();

/*const EstadoListo = require('./src/EstadoListo');
const EstadoPreparando = require('./src/EstadoPreparando');
const EstadoSinAgua = require('./src/EstadoSinAgua');*/

//verifica si cada clase de estado puede manejar una solicitud 
try {
  let maquina = new (require('./src/MaquinaCafe'))();
  maquina.solicitud();  //deberia preparar café
  maquina.solicitud();  //café deberia estar listo y luego sin agua
  maquina.solicitud();  //deberia pedir llenar el tanque de agua
  maquina.solicitud();  //deberia preparar café de nuevo
  console.log("Todas las solicitudes se manejaron correctamente");
} catch (e) {
  console.error("Error encontrado durante la prueba:", e.message);
}

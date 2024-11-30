const Estado = require('./Estado');
// definimos la clase EstadoListo, que hereda de la clase Estado
class EstadoListo extends Estado {
 
  // este metodo maneja la solicitud cuando la maquina esta en estado "Listo"
  manejarSolicitud(contexto) {
    // primero, mostramos en consola que estamos preparando el cafe
    console.log("preparando el café...");
    // cambiamos el estado de la maquina a "Preparando"
    contexto.cambiarEstado(new (require('./EstadoPreparando'))());
  }
}

module.exports = EstadoListo;

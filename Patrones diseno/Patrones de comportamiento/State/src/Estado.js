//esta clase no se usa directamente.

class Estado {
    //Este metodo maneja las solicitudes pero debe ser implementado por una subclase
    manejarSolicitud(contexto) {
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  }
  
  module.exports = Estado;
  

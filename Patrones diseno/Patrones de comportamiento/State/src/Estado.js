class Estado {
    // metodo que deben implementar los estados concretos
    manejarSolicitud(contexto) {
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  }
  
  module.exports = Estado;
  
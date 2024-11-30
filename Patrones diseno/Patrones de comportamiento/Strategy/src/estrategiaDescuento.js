// define la clase base 'estrategiaDescuento', que actúa como una interfaz para todas las estrategias de descuento
  //metodo 'aplicarDescuento' se aplica atraves de las subclases
  //el parámetro 'precio' es el valor original del producto
class estrategiaDescuento {
    aplicarDescuento(precio) {
      ///lanza un error si la subclase no implementa este metodo.
      throw new Error("este metodo debe ser implementado por una subclase.");
    }
  }
  
  module.exports = estrategiaDescuento;
  
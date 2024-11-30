// estrategia de descuento por porcentaje
const estrategiaDescuento = require('./estrategiaDescuento');

class descuentoPorcentaje extends estrategiaDescuento {
  //recibe el valor del porcentaje
  constructor(porcentaje) {
    super();
    this.porcentaje = porcentaje;//asigna el valor de descuento
  }
//calcula el descuento
  aplicarDescuento(precio) {
    return precio - (precio * this.porcentaje / 100);
  }
}

module.exports = descuentoPorcentaje;

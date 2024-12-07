//estrategia de descuento fijo
const estrategiaDescuento = require('./estrategiaDescuento');
//define la clase 'descuentoFijo' que extiende de 'estrategiaDescuento'. 
//esto permite que 'descuentoFijo' implemente su propia lógica de descuento siguiendo el contrato de la clase base

class descuentoFijo extends estrategiaDescuento {
  constructor(descuento) {
    super();
    this.descuento = descuento;//se asigna el valor de descueento
  }

  aplicarDescuento(precio) {
    return precio - this.descuento;//devuelve el presio con el descuento
  }
}

module.exports = descuentoFijo;

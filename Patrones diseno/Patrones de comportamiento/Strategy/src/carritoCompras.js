//eclase para aplicar el descuento
class carritoCompras {
    constructor() {
      this.estrategiaDescuento = null;
    }
  
    //aqui se define la estrategia de descuento a usar
    setEstrategia(estrategia) {
      this.estrategiaDescuento = estrategia;
    }
  
    //calcula el precio final aplicando el descuento
    calcularPrecioFinal(precio) {
      if (!this.estrategiaDescuento) {
        throw new Error("ninguna estrategia de descuento ha sido definida.");
      }
      return this.estrategiaDescuento.aplicarDescuento(precio);
    }
  }
  
  module.exports = carritoCompras;
  
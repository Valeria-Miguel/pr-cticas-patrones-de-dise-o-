/**
 -Esta es la clase base para cualquier tipo de transporte
 -DEfine lo básico que tendrá cualquier transporte (como el modelo)
 -Las clases que creen tipos específicos de transporte pueden agregar más detalles si lo necesitan
 */
class Transport {
  constructor(model) {
    this.model = model;
  }

  //metodo que da la descripción del transporte que es el que jala la descripcion del trasnporte que se seleccione
   
  getDescription() {
    return `El modelo de transporte es ${this.model}.`;
  }

  //aqui se dan los detalles espcificos del transporte si no lo usan las clases hijas, devuelve algo general
   
  getDetails() {
    return `${this.model} es un transporte.`;//esto es lo general
  }
}

module.exports = Transport;

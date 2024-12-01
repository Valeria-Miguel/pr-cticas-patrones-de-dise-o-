const Decorator = require('./Decorator');

class ParticipacionDecorator extends Decorator {
  constructor(notas) {
    super(notas);
  }

  //metodo para obtener la nota con bonificación por participación
  getNota() {
    return this.notas.getNota() + 2; // bonificación de 2 puntos por participación
  }
}

module.exports = ParticipacionDecorator;

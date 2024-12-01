const Decorator = require('./Decorator');

class ExtraCurricularDecorator extends Decorator {
  constructor(notas) {
    super(notas);
  }

  // metodo para obtener la nota con bonificación por trabajos extracurriculares
  getNota() {
    return this.notas.getNota() + 3; // bonificación de 3 puntos por trabajos extracurriculares
  }
}

module.exports = ExtraCurricularDecorator;

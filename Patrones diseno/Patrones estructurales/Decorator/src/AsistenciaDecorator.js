const Decorator = require('./Decorator');

class AsistenciaDecorator extends Decorator { // clase decoradora para añadir bonificación por asistencia perfecta
  constructor(notas) {
    super(notas);  // llamamos al constructor de la clase base (Decorator) con el objeto original
  }

  // metodo para obtener la nota con bonificación por asistencia perfecta
  getNota() {
    return this.notas.getNota() + 1; // bonificación de 1 punto por asistencia perfecta
  }
}

module.exports = AsistenciaDecorator;

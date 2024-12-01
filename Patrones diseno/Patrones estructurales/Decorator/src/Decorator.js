const Notas = require('./Notas');

class Decorator extends Notas {
  constructor(notas) {
    super(notas.getEstudiante(), notas.getNota());
    this.notas = notas;
  }

  // metodo para obtener la nota
  getNota() {
    return this.notas.getNota();
  }

  // metodo para obtener el nombre del estudiante
  getEstudiante() {
    return this.notas.getEstudiante();
  }
}

module.exports = Decorator;

class Notas {
    constructor(estudiante, nota) {
      this.estudiante = estudiante;
      this.nota = nota;
    }
  
    // metodo para obtener la nota
    getNota() {
      return this.nota;
    }
  
    // metodo para obtener el nombre del estudiante
    getEstudiante() {
      return this.estudiante;
    }
  }
  
  module.exports = Notas;
  
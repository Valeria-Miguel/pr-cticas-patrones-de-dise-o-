
const readline = require('readline');
const Notas = require('./src/Notas');
const ParticipacionDecorator = require('./src/ParticipacionDecorator');
const AsistenciaDecorator = require('./src/AsistenciaDecorator');
const ExtraCurricularDecorator = require('./src/ExtraCurricularDecorator');
// configuramos readline para leer del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// función para solicitar la información del estudiante y aplicar decoradores
function solicitarNotas() {
  rl.question('Ingresa el nombre del estudiante: ', (nombre) => {
    rl.question('Ingresa la nota del estudiante: ', (nota) => {
      let notasEstudiante = new Notas(nombre, parseFloat(nota));
      
      rl.question('¿El estudiante tiene bonificación por participación? (si/no): ', (respParticipacion) => {
        if (respParticipacion.toLowerCase() === 'si' || respParticipacion.toLowerCase() === 's') {
          notasEstudiante = new ParticipacionDecorator(notasEstudiante);
        }
        
        rl.question('¿El estudiante tiene bonificación por asistencia perfecta? (si/no): ', (respAsistencia) => {
          if (respAsistencia.toLowerCase() === 'si' || respAsistencia.toLowerCase() === 's') {
            notasEstudiante = new AsistenciaDecorator(notasEstudiante);
          }
          
          rl.question('¿El estudiante tiene bonificación por trabajos extracurriculares? (si/no): ', (respExtraCurricular) => {
            if (respExtraCurricular.toLowerCase() === 'si' || respExtraCurricular.toLowerCase() === 's') {
              notasEstudiante = new ExtraCurricularDecorator(notasEstudiante);
            }
// muestra la nota final del estudiante con todas las bonificaciones aplicadas
            console.log(`${notasEstudiante.getEstudiante()} tiene una nota final de: ${notasEstudiante.getNota()}`);

            rl.question('¿Deseas ingresar otra nota? (si/no): ', (respuesta) => {
              if (respuesta.toLowerCase() === 'si' || respuesta.toLowerCase() === 's') {
                solicitarNotas();
              } else {
                rl.close(); // si responde "no", cierra el programa
              }
            });
          });
        });
      });
    });
  });
}

// inicia el proceso de solicitud de notas
solicitarNotas();

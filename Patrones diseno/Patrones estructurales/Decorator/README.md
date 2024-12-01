Patron decorator

Decorator es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.(https://refactoring.guru/es/design-patterns/decorator)

aqui se implementa  Decorator para gestionar las notas de estudiantes añadiendo bonificaciones por diferentes razones (participación, asistencia perfecta, y trabajos extracurriculares). Cada bonificación se aplica como un decorador que extiende la funcionalidad de un objeto Notas.

asi estan los archivos: 

index.js: solicita el nombre y nota del estudinte y luego se aplcian los decoradores segen las respuestas del usuario y mostramos la nota final del estudiante con todas las bonificaciones aplicadas

Notas.js: la clase  Notas que almacena el nombre del estudiante y su nota base

Decorator.js: Clase decorator extiende Notas y actúa como una clase para todos los decoradores delegando las llamadas a los metodos de la instancia de Notas que esta decorando

AsistenciaDecorator.js: la clase AsistenciaDecorator extiende Decorator y añade una bonificación por asistencia perfecta

ExtraCurricularDecorator.js: clase ExtraCurricularDecorator extiende Decorator y añade una bonificación por trabajos extracurricular

ParticipacionDecorator.js:clase ParticipacionDecorator extiende Decorator y añade una bonificación por participación.

consola:
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\decorator> node index.js
Ingresa el nombre del estudiante: sol
Ingresa la nota del estudiante: 6
¿El estudiante tiene bonificación por participación? (si/no): si
¿El estudiante tiene bonificación por asistencia perfecta? (si/no): no
¿El estudiante tiene bonificación por trabajos extracurriculares? (si/no): si
sol tiene una nota final de: 11
¿Deseas ingresar otra nota? (si/no):
Patron de diseño State
State es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.
https://refactoring.guru/es/design-patterns/state

implemente el patrón State para simular el funcionamiento de una máquina de café. La máquina de café puede estar en diferentes estados: preparando el café..., café listo. disfruta!, y sin agua. por favor, llena el tanque. Dependiendo del estado actual, la maquina realizara acciones diferentes y cambiará a otros estados en consecuencia

asi se structura el ejercicio:
index.js: coordina todos los elementos del sistema, crea instancias de la clase MaquinaCafe y gestiona las solicitudes de preparación de café.
MaquinaCafe.js: define la clase MaquinaCafe, que mantiene el estado actual de la máquina y delega las solicitudes al estado correspondiente.
Estado.js: Clase base que define el metodo  manejarSolicitud, que sera despues implementado por los estados concretos.
EstadoListo.js: Estado concreto que gestiona cuando la maquina esta lista para preparar café.
EstadoPreparando.js: Estado concreto que gestiona cuando la maquina esta preparando café.
EstadoSinAgua.js: Estado concreto que gestiona cuando la máquina no tiene agua y necesita ser rellenada.

asi se vera en consola:
 C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Paiseño\Patrones diseno\Patrones de comportx.jsamiento\state> node index.js
preparando el café...
café listo. disfruta!
sin agua. por favor, llena el tanque.    
preparando el café...                    tamente
Todas las solicitudes se manejaron correciseño\Patrones diseno\Patamente
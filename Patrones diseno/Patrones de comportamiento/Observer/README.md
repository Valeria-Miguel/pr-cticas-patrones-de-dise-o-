Patron Observer
Observer es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.
https://refactoring.guru/es/design-patterns/observer

aqui implemente el patron Observer para simular un sistema que observa cambios en las condiciones climáticas y notifica a diferentes observadores: un pájaro y una tortuga. Cada uno de estos observadores reaccionará a los cambios en el clima de manera distinta
se estructura asi el ejercicio:
- index.js:aqui coordinan todos los elementos del sistema, se crean instancias de las clases Clima, Pajaro y Tortuga y ingresamos los cambios de clima y se muestran mensajes dependiendo de como se conporten el pajaro y la tortuga
-Clima.js: aqui se maneja el estado del clima la tempetratura y la humendad avisa a los observadores si ahi un cambio 
--Tortuga.js y Pajaro,js : este observador está pendiente de la temperatura:
--Si la temperatura es mayor a 25 grados, el pájaro canta
--Si es menor o igual a 25 grados, se queda callado porque hace frío
Igual en la tortuga el pájaro se registra con el clima y reacciona a los cambios
-sujeto.js: es una clase base que se encarga de manejar a los observadores es donde se puede agregar notificar alos  observadores. aqui es donde se notifica cuando ahi un cambio del clima
-Observador.js:se define que cada observador debe tener un metodo actualizar, que será llamado cada vez que el clima cambie y es oara los observadores como Pajaro y Tortuga

asi se vera en consola 
#C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones de comportamiento\observer> node index.js
#Ingresa la nueva temperatura en grados Celsius: 12
#El pájaro está callado porque hace frío.
#La tortuga está contenta porque hay suficiente humedad.        
#Ingresa la nueva humedad en porcentaje: 43
#El pájaro está callado porque hace frío.
#La tortuga está contenta porque hay suficiente humedad.        
#¿Deseas ingresar más cambios climáticos? (si/no):        

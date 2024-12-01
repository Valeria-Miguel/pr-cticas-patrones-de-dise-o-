# Patrón de Diseño Template 
Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase pero permite que las subclases sobrescriban pasos del algoritmo sin cambiar su estructura. (https://refactoring.guru/es/design-patterns/template-method)

aqui se implemeta el patron Template Method para simular el proceso de encender diferentes dispositivos electrónicos, como una television y una radio cada dispositivo tiene pasos específicos que debe seguir para encenderse pero comparten algunos pasos comunes

asi se structura:
-index.js: crea instancias de Television y Radio, y las enciende y las enciende con el metodo encender
-DispositivoElectronico.js: clase DispositivoElectronico define el metodo template encender que sigue una secuencia de pasos para encender el dispositivo y se encuentran metodo de enceder que es un paso comun
-Television.js: se extiende DispositivoElectronico e implementa los pasos específicos para encender una televisión clase television  implementa los pasos especificos para encender una televisión
-Radio.js: extiende DispositivoElectronico e implementa los pasos específicos para encender un radio clase radio concreta que implementa los pasos específicos para encender una radio

asi se ve en consola:
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones de comportamiento\Template> node index.js
Encendiendo la televisión:
Conectando a la electricidad...
Encendiendo la televisión...
La televisión está encendida y mostrando 
la imagen.

Encendiendo la radio:
Conectando a la electricidad...
Encendiendo la radio...
La radio está encendida y transmitiendo sonido.
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones de comportamiento\Template>
Adapter es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.(https://refactoring.guru/es/design-patterns/adapter)

aqui se usa  el patron Adapter para convertir la temperatura de grados Celsius a grados Fahrenheit. Tenemos sensores de temperatura que trabajan con diferentes unidades de medida y utilizamos un adaptador para que puedan integrarse en un sistema que solo trabaja con Fahrenheit.

asi esta la estructura:
index.js: aqui se solicita la temperatura en grados Celsius, creamos una instancia de CelsiusSensor con ese valor y luego usamos TemperatureAdapter para convertir esa temperatura a Fahrenheit y mostrar el resultado

-CelsiusSensor.js: se define clase CelsiusSensor que representa un sensor que mide la temperatura en grados Celsius que tiene un metodo getTemperature que devuelve la temperatura en Celsius

FahrenheitSensor.js: se define FahrenheitSensor representa un sensor que mide la temperatura en grados Fahrenheit que tiene unmetodo getTemperatureFahrenheit que devuelve la temperatura en Fahrenheit

TemperatureAdapter.js: aqui se encuentra la clase TemperatureAdapter actua como un adaptador que convierte la temperatura de Celsius a Fahrenheit se le pasa una instancia de CelsiusSensor y tiene un metodo getTemperatureFahrenheit que realiza la conversión de los datos que entran

asi se ve en la terminal: 
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\Adapter> node index.js
Ingresa la temperatura en grados Celsius: 14
La temperatura en Fahrenheit es: 57.2
¿Deseas ingresar otra temperatura? (si/no): si
Ingresa la temperatura en grados Celsius: 32
La temperatura en Fahrenheit es: 89.6
¿Deseas ingresar otra temperatura? (si/no):
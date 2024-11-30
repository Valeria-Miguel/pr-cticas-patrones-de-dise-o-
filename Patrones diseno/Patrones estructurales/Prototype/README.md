Patorn PROtotype 
Prototype es un patrón de diseño  que nos permite copiar objetos existentes sin que el código dependa de sus clases.(https://refactoring.guru/es/design-patterns/prototype)

se implementa el patrón Prototype para clonar objetos que representan bebidas alcohólicas, cada bebida tiene un nombre, un tipo, y un grado alcohólico. Utilizamos el metodo clonar para crear copias de las bebidas y el método mostrarDetalles para mostrar los detalles de las bebidas

estructura del ejercicio:
index.js:solicita que ingrese la información de la bebida se crea una instancia de BebidaAlcoolica y se clona la bebida y se muestra los detalles de la bebida original y la bebida clonada

BebidaAlcoolica.js: la clase BebidaAlcoolica representa una bebida alcoholica con su nombre, tipo, y grado alcoholico. Esta clase incluye un metodo clonar que crea una copia de la bebida y un metodo mostrarDetalles que muestra los detalles de la bebida

consola:
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\Prototype> node index.js
Ingresa el nombre de la bebida: vino 
Ingresa el tipo de bebida: vino
Ingresa el grado alcohólico de la bebida: 80

Detalles de la bebida original:
Bebida: vino , Tipo: vino, Grado Alcohólico: 80%

Detalles de la bebida clonada:
Bebida: vino , Tipo: vino, Grado Alcohólico: 80%
¿Deseas ingresar otra bebida? (si/no):
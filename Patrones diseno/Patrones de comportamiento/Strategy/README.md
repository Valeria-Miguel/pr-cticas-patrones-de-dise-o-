# Patrón de Diseño Strategy 

Strategy es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.(https://refactoring.guru/es/design-patterns/strategy)

aqui se implemta  Strategy para aplicar diferentes tipos de descuentos en un carrito de compras dependiendo del tipo de descuento seleccionado por el usuario (fijo o porcentaje) se aplicara el algoritmo correspondiente para calcular el precio final

asi se organizan lo archivos:
-index.js:se solicita la entrada  el precio del producto y el tipo de descuento y muestra el precio final con el descuento aplicado
-carritoCompras.js: se define la clase carritoCompras que maneja la estrategia de descuento que se aplicara
-descuentoFijo.js: se encuentra la clase descuentoFijo que implementa la logica de descuento fijo.
-descuentoPorcentaje.js: se encuentra la clase descuentoPorcentaje que implementa la logica de descuento por porcentaje.
-estrategiaDescuento.js: Clase base para todas las estrategias de descuento y se encuentra el metodo de aplicarDescuento que se impementa por todas las subclases Descuentofijo y descuentoPorcentaje


asi se ve en consola:
C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones de comportamiento\strategy> node index.js
Ingresa el precio del producto: 54
Ingresa el tipo de descuento (fijo/porcentaje): porcentaje
Ingresa el porcentaje de descuento: 12   
El precio final con descuento es: $47.519999999999996
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones de comportamiento\strategy>
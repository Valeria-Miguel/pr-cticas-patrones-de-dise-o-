Patron de diseño Abstract Factory

Abstract Factory es un patrón de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.(https://refactoring.guru/es/design-patterns/abstract-factory)

aqui se implemeto el patron Abstract Factory para crear diferentes tipos de casas: modernas y tradicionales cada tipo de casa tiene su propia fabrica que produce puertas y ventanas especificas para ese estilo
Estructura del ejercicio
index.js: crea instancias de ModernHouseFactory y TraditionalHouseFactory y describe las casas
HouseFactory.js: clase HouseFactory base para las fabricas de casas que define los metodos createDoor y createWindow
ModernHouseFactory.js: clase ModernHouseFactory extiende HouseFactory y crea puertas y ventanas modernas
TraditionalHouseFactory.js: clase TraditionalHouseFactory extiende HouseFactory y crea puertas y ventanas tradicionales
Door.js: la clase Door define un metodo abstracto describe que debe ser implementado por todas las subclases
ModernDoor.js:clase ModernDoor extiende Door y sobrescribe el metodo describe para describir una puerta moderna
TraditionalDoor.js: clase TraditionalDoor extiende Door y sobrescribe el metodo describe para describir una puerta tradicional
Window.js: clase Window define un metodo abstracto describe que debe ser implementado por todas las subclases
ModernWindow.js: clase ModernDoor extiende Door y sobrescribe el metodo describe para describir una puerta moderna
TraditionalWindow.js: clase TraditionalWindow extiende Window y sobrescribe el método describe para describir una ventana tradicional

terminal:
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\Abstract Factory> node index.js
descripción de casa moderna:
puerta moderna con diseño minimalista.
ventana moderna con cristal templado.
descripción de casa tradicional:
puerta tradicional de madera con detalles tallados.
ventana tradicional de madera con vidrio esmerilado.
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\Abstract Factory>

Patron de diseño Singleton 
Singleton es un patrón de diseño  que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.(https://refactoring.guru/es/design-patterns/singleton)

aqui se usa el el patron Singleton para gestionar las habitaciones de un hotel la clase Hotel asegura que solo haya una instancia de la clase en todo el programa. 

asi esta etructurado el ejemplo:
index.js: se solicita el numero de habitacion para verificar si esta ocupada y se muestran las reservas actuales, y utilizamos la instancia única de Hotel para gestionar estas operaciones.

Hotel.js: clase Hotel utiliza una instancia estatica para mantener una unica instancia de la clase. 
El constructor es privado para evitar la creación de multiples instancias proporciona metodos para reservar habitaciones, verificar si una habitación esta ocupada, y mostrar todas las reservas actuales

consola:
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales> cd singleton
Patrones estructurales\singleton> node index.js
Reservas actuales:
Habitación 1 está ocupada por Pedro Sánchez.
Habitación 3 está ocupada por Marta López.
Habitación 9 está ocupada por Sara López.
Habitación 12 está ocupada por Luna López.
Habitación 14 está ocupada por Ana López.
Habitación 15 está ocupada por Marta López.
Ingresa el número de la habitación que deseas verificar: 12    
La habitación 12 está ocupada.
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\singleton> node index.js
Reservas actuales:
Habitación 1 está ocupada por Pedro Sánchez.
Habitación 3 está ocupada por Marta López.
Habitación 9 está ocupada por Sara López.
Habitación 12 está ocupada por Luna López.
Habitación 14 está ocupada por Ana López.
Habitación 15 está ocupada por Marta López.
Ingresa el número de la habitación que deseas verificar: 2     
La habitación 2 está libre.
PS C:\Users\Acer\Desktop\siete\Patrones_Diseño\Patrones diseno\Patrones estructurales\singleton>
## Explicación del Patrón Factory

El Factory Method es un patrón de diseño que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán. Fuente (https://refactoring.guru/es/design-patterns/factory-method)

## explicación

Entonces a como lo entiendo en lugar de instanciar objetos directamente, se delega esa responsabilidad a una "fábrica"
En mi ejemplo se utiliza para crear diferentes tipos de transportes (carros, bicicletas y autobuses) sin necesidad de instanciarlos directamente en el código principal(vehicleApp.js). En su lugar, cada tipo de transporte tiene su propia fábrica (ej. CarFactory para carros) que se encarga de crear instancias para los tipos carro. Esto lleva a en un flujo donde el se selecciona el tipo de transporte, aqui se identifica la fábrica que le correspondiente, y esta devuelve el objeto del transporte con sus características. Por ejemplo, si eligimos un "carro" y ponemos el modelo "Honda", la CarFactory crea un objeto Car con estos datos, que luego se almacenan y se muestran con su descripción y detalles del mimo. Si quemremos agregar un nuevo tipo de transporte solo se crear una nueva clase y fábrica sin modificar el código que ya existe.

├── /src
│   ├── /factories
│   │   ├── CarFactory.js     # fábrica para carros  ----->  **CarFactory**: crea objetos de "tipo" carro
│   │   ├── BikeFactory.js    # fabrica para bicicletas------> **BikeFactory**: crea objetos de "tipo" bicicleta
│   │   └── BusFactory.js     # fabrica para autobuses----->**BusFactory**: crea objetos de "tipo" autobus
│   ├── /modules
│   │   ├── Car.js            # clase para carros ---> Describe carros atraves del método `getDetails` 
│   │   ├── Bike.js           # clase  para bicicletas--Describe bicis atraves del método `getDetails` 
│   │   └── Bus.js            # clase  para autobus--< describe un autobs atraves del método `getDetails` > 
│   ├── Transport.js          # clase por donde pasan todos los transportes 
                                    -define las propiedades comunes y un método general donde se obtiene la descripcion y el nombre del modelo del trasnporte es decir hereda de esta clase y agrega detalles deacuerdo al tipo de transporte
│   └── VehicleApp.js         # el main
                                    1. se selecciona el tipo de transporte
                                   2.  pide el modelo del transporte
                                   3. utiliza la fábrica que corresponde al tipo de transpote para crear el transporte y registrar los resultados
│
├── index.js                  # se iniciaiza el proyecto con node index.js
└── package.json              





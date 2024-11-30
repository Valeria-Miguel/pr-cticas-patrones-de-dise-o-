const Television = require('./src/Television');
const Radio = require('./src/Radio');
//crear una instancia de television y radioencenderla
const television = new Television();
console.log("Encendiendo la televisión:");
television.encender();

console.log("\nEncendiendo la radio:");
const radio = new Radio();
radio.encender();

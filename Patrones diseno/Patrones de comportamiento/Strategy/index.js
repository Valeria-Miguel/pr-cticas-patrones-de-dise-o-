const readline = require('readline');
const carritoCompras = require('./src/carritoCompras');
const descuentoFijo = require('./src/descuentoFijo');
const descuentoPorcentaje = require('./src/descuentoPorcentaje');

// crear interfaz de readline para recibir entradas por teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// función para preguntar al usuario
function preguntar(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// función asincrónica para ejecutar el flujo
async function main() {
  const carrito = new carritoCompras();

  // preguntar el precio inicial del producto
  const precio = parseFloat(await preguntar('Ingresa el precio del producto: '));

  // preguntar el tipo de descuento
  const tipoDescuento = await preguntar('Ingresa el tipo de descuento (fijo/porcentaje): ');

  if (tipoDescuento === 'fijo') {
    const descuento = parseFloat(await preguntar('Ingresa el monto del descuento fijo: '));
    carrito.setEstrategia(new descuentoFijo(descuento));
  } else if (tipoDescuento === 'porcentaje') {
    const porcentaje = parseFloat(await preguntar('Ingresa el porcentaje de descuento: '));
    carrito.setEstrategia(new descuentoPorcentaje(porcentaje));
  } else {
    console.log('Tipo de descuento no válido.');
    rl.close();
    return;
  }

  // calcular y mostrar el precio final
  const precioFinal = carrito.calcularPrecioFinal(precio);
  console.log(`El precio final con descuento es: $${precioFinal}`);

  rl.close();
}

// ejecutar la función principal
main();

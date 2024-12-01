class Window {
  // igual que la puerta, necesitamos un "describe" en la ventana
  describe() {
    // si no se sobrescribe el metodo se muestra el error
    throw new Error("Error deberia ser sobrescrito");
  }
}

module.exports = Window;

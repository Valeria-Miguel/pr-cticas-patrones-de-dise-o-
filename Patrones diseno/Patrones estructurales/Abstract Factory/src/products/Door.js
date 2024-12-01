class Door {
  // aqui decimos que todos los productos que hereden de Door(puerta) deben tener el metodo describe
  describe() {
    // si no se sobrescribe este metodo se ve este error un error
    throw new Error("Error no se sobreescribio");
  }
}

module.exports = Door;

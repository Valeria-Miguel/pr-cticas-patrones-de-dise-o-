class HouseFactory {
  // esta es la interfaz de la fabrica, como un plano que nos dice lo que necesitamos hacer
  createDoor() {
    // si no se implementa este metodo se muetra este error
    throw new Error("Error debe de ser sobre escrito");
  }
  
  createWindow() {
   // si no se implementa este metodo se muetra este error
    throw new Error("Error debe de ser sobre escrito");
  }
}

module.exports = HouseFactory;

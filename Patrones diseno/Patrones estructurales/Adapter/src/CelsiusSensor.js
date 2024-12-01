class CelsiusSensor {
    constructor(temperatura) {
      this.temperatura = temperatura;
    }
  
    // metodo para obtener la temperatura en grados Celsius
    getTemperature() {
      return this.temperatura;
    }
  }
  
  module.exports = CelsiusSensor;
  
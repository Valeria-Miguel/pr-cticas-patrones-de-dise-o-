const CelsiusSensor = require('./CelsiusSensor');

class TemperatureAdapter {
  constructor(sensor) {
    this.sensor = sensor;
  }

  // metdo para obtener la temperatura en grados Fahrenheit
  getTemperatureFahrenheit() {
    const celsiusTemp = this.sensor.getTemperature();
    return (celsiusTemp * 9/5) + 32;
  }
}

module.exports = TemperatureAdapter;

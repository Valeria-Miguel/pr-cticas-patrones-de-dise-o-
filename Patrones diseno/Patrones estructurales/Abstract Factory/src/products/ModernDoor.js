const Door = require('./Door');

class ModernDoor extends Door {
  // aca sobrescribimos el metodo describe para que diga la descripcionde dela puerta moderna
  describe() {
    return 'puerta moderna con diseño minimalista.';
  }
}

module.exports = ModernDoor;

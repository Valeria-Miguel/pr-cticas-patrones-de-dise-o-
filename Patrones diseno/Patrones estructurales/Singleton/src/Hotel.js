class Hotel {
    // instancia privada estatica para mantener la instancia única
    static instancia;
  
    // constructor privado para evitar la creación de más instancias
    constructor() {
      if (Hotel.instancia) {
        throw new Error("Ya existe una instancia de Hotel. Usa Hotel.getInstance() para obtenerla.");
      }
      // inicializar algunas habitaciones como ocupadas
      this.habitaciones = {
        1: 'Pedro Sánchez',
        3: 'Marta López',
        9: 'Sara López',
        12: 'Luna López',
        14: 'Ana López',
        15: 'Marta López',
      };
    }
  
    // metodo estático para obtener la instancia única
    static getInstance() {
      if (!Hotel.instancia) {
        Hotel.instancia = new Hotel();
      }
      return Hotel.instancia;
    }
  
    // aqui se reserva una habitación
    reservarHabitacion(numero, nombreHuesped) {
      if (this.habitaciones[numero]) {
        console.log(`La habitación ${numero} ya esta ocupada por ${this.habitaciones[numero]}.`);
      } else {
        this.habitaciones[numero] = nombreHuesped;
        console.log(`Habitación ${numero} reservada para ${nombreHuesped}.`);
      }
    }
  
    // se verifica si una habitación está ocupada
    estaOcupada(numero) {
      return !!this.habitaciones[numero];
    }
  
    // se  mostran todas las reservas
    mostrarReservas() {
      console.log("Reservas actuales:");
      for (const numero in this.habitaciones) {
        console.log(`Habitación ${numero} está ocupada por ${this.habitaciones[numero]}.`);
      }
    }
  }
  
  module.exports = Hotel;
  
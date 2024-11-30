//clase abstracta que define el esqueleto del proceso de encender un dispositivo
class DispositivoElectronico {
     //metodo Template que define la secuencia de pasos para encender el dispositivo
    encender() {
        this.conectarElectricidad() //paso comun: conectar el dispositivo a la electricidad
        this.activarDispositivo();// paso específico: cada dispositivo debe implementar cómo se activa
        this.mostrarEstado();// paso específico: cada dispositivo debe implementar cómo muestra su estado
      }
  //paso comin
    conectarElectricidad() {
      console.log("Conectando a la electricidad...");
    }
  //se postrara cmo se activa dependiendo dl disostivo
    activarDispositivo() {
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  
    mostrarEstado() {
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  }
  
  module.exports = DispositivoElectronico;
  
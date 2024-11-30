//Aqui estamos utilizando el patrón Prototype para permitir la clonación de objetos.

class Utensilio {
    constructor(material, tamano) {
      //el constructor recibe el material y el tamaño del utensilio
      this.material = material;
      this.tamano = tamano;
    }
  
    clonar() {

      //cada subclase proporciona su propia implementación de clonación
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  
    mostrar() {  //cada subclase proporciona su propia implementación de clonación sinp aparece error
      throw new Error("Este metodo debe ser implementado por una subclase.");
    }
  }
  
  module.exports = Utensilio;
  
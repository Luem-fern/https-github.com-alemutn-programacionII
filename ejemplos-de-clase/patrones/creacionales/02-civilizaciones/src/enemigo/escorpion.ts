import Enemigo from "./enemigo";

export default class Escorpion extends Enemigo {

    public atacar(): number {
      console.log("El escorpión clava su aguijón");
      return this.fuerzaAtaque;
    }
  

}


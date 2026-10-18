import Enemigo from "./enemigo";

export default class Lobo extends Enemigo {

    public atacar(): number {
      console.log("El lobo muerde ferozmente");
      return this.fuerzaAtaque;
    }

}

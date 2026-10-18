import { ESCORPION_FUERZA, ESCORPION_VIDA } from "../constants";
import Enemigo from "../enemigo/enemigo";
import Escorpion from "../enemigo/escorpion";
import Nivel from "./nivel";

export default class Desierto extends Nivel {

    protected crearEnemigo(): Enemigo {
      const enemigo = new Escorpion("S", ESCORPION_VIDA, ESCORPION_FUERZA);
      return enemigo;
    }
  
}


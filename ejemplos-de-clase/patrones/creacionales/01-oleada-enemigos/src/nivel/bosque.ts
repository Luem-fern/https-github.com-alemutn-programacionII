import { LOBO_FUERZA, LOBO_VIDA } from "../constants";
import Enemigo from "../enemigo/enemigo";
import Lobo from "../enemigo/lobo";
import Nivel from "./nivel";

export default class Bosque extends Nivel {

    protected crearEnemigo(): Enemigo {
      const enemigo = new Lobo("Feroz", LOBO_VIDA, LOBO_FUERZA);
      return enemigo;
    }
  
}

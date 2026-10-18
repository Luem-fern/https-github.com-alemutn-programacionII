import { ATAQUE, TRES } from "./constants";
import Bosque from "./nivel/bosque";
import Desierto from "./nivel/desierto";
import Nivel from "./nivel/nivel";
import { NombreNivel } from "./types";

function main(nombreNivel: NombreNivel, cantidadEnemigos: number): void {

  // let nivel: Nivel = undefined as unknown as Nivel;
  // if (nombreNivel === NombreNivel.BOSQUE) {
  //   nivel = new Bosque("Bosque Negro");
  // }
  // else if (nombreNivel === NombreNivel.DESIERTO) {
  //   nivel = new Desierto("Sahara");
  // }


  const mapDeNiveles: Map<NombreNivel, Nivel> = new Map();
  mapDeNiveles.set(NombreNivel.BOSQUE, new Bosque("Bosque Negro"));
  mapDeNiveles.set(NombreNivel.DESIERTO, new Desierto("Sahara"));

  const nivel = mapDeNiveles.get(nombreNivel);

// ^------------------------------------------------------^
  
  if (nivel) {
    const enemigosCreados = nivel.iniciarOleada(cantidadEnemigos);
    const primerEnemigo = enemigosCreados[0];
    primerEnemigo.recibirDanio(ATAQUE);
    console.log(`El primer enemigo es el ${primerEnemigo.getNombre()} y su vida restante es: ${primerEnemigo.getVidaRestante()}`);
  }

}


main(NombreNivel.DESIERTO, TRES);

import { ATAQUE, TRES } from "./constants";
import Bosque from "./nivel/bosque";
import Desierto from "./nivel/desierto";
import { ConstructorNivel, TipoNivel } from "./types";

/**
 * Función auxiliar para suplir la falta de input del usuario.
 */
function getNombreNivel(tipo: TipoNivel): string {
  const mapDeNiveles: Map<TipoNivel, string> = new Map();
  mapDeNiveles.set(TipoNivel.BOSQUE, "Bosque Negro");
  mapDeNiveles.set(TipoNivel.DESIERTO, "Sahara");
  
  const nombre:string = mapDeNiveles.get(tipo) ?? "";
  return nombre;
}

function main(tipoNivel: TipoNivel, cantidadEnemigos: number): void {

  // ************** VERSION SIMPLIFICADA *******************
  // let nivel: Nivel = undefined as unknown as Nivel;
  // if (nombreNivel === NombreNivel.BOSQUE) {
  //   nivel = new Bosque("Bosque Negro");
  // }
  // else if (nombreNivel === NombreNivel.DESIERTO) {
  //   nivel = new Desierto("Sahara");
  // }
  // *******************************************************


  const mapDeNiveles: Map<TipoNivel, ConstructorNivel> = new Map();
  mapDeNiveles.set(TipoNivel.BOSQUE, Bosque);
  mapDeNiveles.set(TipoNivel.DESIERTO, Desierto);
  const claseNivel = mapDeNiveles.get(tipoNivel);

  if (claseNivel) {
    const nivel = new claseNivel(getNombreNivel(tipoNivel));
    const enemigosCreados = nivel.iniciarOleada(cantidadEnemigos);
    const primerEnemigo = enemigosCreados[0];
    primerEnemigo.recibirDanio(ATAQUE);
    console.log(`El primer enemigo es el ${primerEnemigo.getNombre()} y su vida restante es: ${primerEnemigo.getVidaRestante()}`);
  }

}


main(TipoNivel.DESIERTO, TRES);

import Enemigo from "../enemigo/enemigo";

export default abstract class Nivel {
    
    public constructor(private nombre: string) { }

    public getNombre(): string {
      return this.nombre;
    }

    /**
     * Este método inicia una oleada de ataque de enemigos
     * @param {number} cantidad: cantidad de enemigos a crear
     * @returns Enemigo[]
     */
    public iniciarOleada(cantidad: number): Enemigo[] {
      console.log(`Comienza la oleada en ${this.nombre}`);
      const enemigos = this.crearListaDeEnemigos(cantidad);
      this.hacerAtacarEnemigos(enemigos);
      return enemigos;
    }

    protected abstract crearEnemigo(): Enemigo;

    private crearListaDeEnemigos(cantidad: number): Enemigo[] {
      const enemigos: Enemigo[] = [];
      for (let i = 0; i < cantidad; i++) {
        enemigos.push(this.crearEnemigo());
      }
      return enemigos;
    }
    
    private hacerAtacarEnemigos(enemigos: Enemigo[]): void {
      for (const enemigo of enemigos) {
        enemigo.atacar();
      }
    }
}


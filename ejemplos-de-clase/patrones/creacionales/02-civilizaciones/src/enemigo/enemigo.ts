import { ZERO } from "../constants";

export default abstract class Enemigo {
  
    public constructor(protected nombre: string, protected vidaActual: number, protected fuerzaAtaque: number) {}

    public abstract atacar(): number;

    public getNombre(): string {
      return this.nombre;
    }

    public getVidaRestante(): number {
      return this.vidaActual;
    }

    public recibirDanio(cantidad: number): void {
      this.vidaActual -= cantidad;
      if (this.vidaActual <= ZERO) {
        this.vidaActual = ZERO;
      }
    }
}


import Nivel from "./nivel/nivel";

export enum TipoNivel {
  BOSQUE = "bosque",
  DESIERTO = "desierto"
}

export type ConstructorNivel = new (nombre: string) => Nivel;

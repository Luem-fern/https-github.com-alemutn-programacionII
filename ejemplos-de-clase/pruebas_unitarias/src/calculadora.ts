
const CERO = 0;

export class Calculadora {

  private resultado: number;
  public constructor() {
    this.resultado = 0;
  }

  public getResultado(): number {
    return this.resultado;
  }

  public suma(numero1: number, numero2: number): number {
    this.resultado = numero1 + numero2;
    return this.resultado;
  }

  public producto(numero1: number, numero2: number): number {
    this.resultado = numero1 * numero2;
    return this.resultado;
  }

  public division(dividendo: number, divisor: number): number {
    if (divisor === CERO) {
      throw new Error("No se puede dividir por cero");
    }
    this.resultado = dividendo / divisor;
    return this.resultado;
  }

}

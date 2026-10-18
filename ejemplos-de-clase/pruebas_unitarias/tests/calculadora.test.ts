import { Calculadora } from "../src/calculadora";
import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";

describe("Test de la Calculadora", () => {

  let instance: Calculadora;
  
  // Tareas de inicializacion
  beforeEach(() => {
    instance = new Calculadora();
  });

  // Tareas de limpieza
  afterEach(() => {
    
  });

  test("Verifico intancia de Calculadora", () => {
    expect(instance).toBeInstanceOf(Calculadora);
  });

  test("Pruebo suma de 2 números positivos", () => {
    const resultado = instance.suma(3, 1);  
    expect(resultado).toEqual(4);
  });

  test("Pruebo producto de 2 números positivos", () => {
    const resultado = instance.producto(3, 1);  
    expect(resultado).toEqual(3);
  });

  test("Pruebo cociente de 2 números positivos enteros. Resultado número entero", () => {
    const resultado = instance.division(3, 1);  
    expect(resultado).toEqual(3);
  });

  test("Pruebo cociente de 2 números positivos enteros. Resultado número real", () => {
    const resultado = instance.division(3, 2);  
    expect(resultado).toEqual(1.5);
  });

  test("Pruebo cociente con divisor igual a cero arroja Error.", () => {
    try {
      instance.division(3, 0);  
    }
    catch(error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toEqual("No se puede dividir por cero");
    }

    // expect(() => instance.division(3,0)).toThrowError("No se puede dividir por 0");
  });

});

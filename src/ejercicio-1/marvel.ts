import {Fighter} from './fighter';

/**
 * Clase para representar un luchador de Marvel
 */
export class Marvel extends Fighter {
/**
 *
 * @param {string} nombre
 * @param {number} altura
 * @param {number} peso
 * @param {number} ataque
 * @param {number} defensa
 * @param {number} velocidad
 * @param {number} hp
 */
  constructor(nombre: string, altura: number, peso: number,
      ataque: number, defensa: number, velocidad: number, hp: number,
      protected nombreReal: string, protected nemesis: string[],
      protected poderes: string[], protected afiliaciones: string[], protected frases: string[]) {
    super(nombre, 'marvel', altura, peso, ataque, defensa, velocidad, hp, frases);
  }
  /**
   *
   * @return {string}
   */
  getNombreReal(): string {
    return this.nombreReal;
  }
  /**
   *
   * @return {string[]}
   */
  getNemesis(): string[] {
    return this.nemesis;
  }
  /**
   *
   * @return {string}
   */
  getPoderes(): string[] {
    return this.poderes;
  }
  /**
   *
   * @return {string[]}
   */
  getAfiliaciones(): string[] {
    return this.afiliaciones;
  }
}

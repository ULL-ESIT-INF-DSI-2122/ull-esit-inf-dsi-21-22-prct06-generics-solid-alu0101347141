import {Fighter} from './fighter';

/**
 * Clase para representar un luchador de DC
 */
export class DC extends Fighter {
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
      protected poderes: string[], protected activo: boolean, protected frases: string[]) {
    super(nombre, 'dc', altura, peso, ataque, defensa, velocidad, hp, frases);
  }
  /**
   * Getter de nombreReal
   * @return {string}
   */
  getNombreReal(): string {
    return this.nombreReal;
  }
  /**
   * Getter de nemesis
   * @return {string[]}
   */
  getNemesis(): string[] {
    return this.nemesis;
  }
  /**
   * Getter de poderes
   * @return {string}
   */
  getPoderes(): string[] {
    return this.poderes;
  }
  /**
   * Getter de activo
   * @return {boolean}
   */
  isActive(): boolean {
    return this.activo;
  }
}

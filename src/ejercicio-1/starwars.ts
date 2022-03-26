import {Fighter} from './fighter';

/**
 * Clase para representar un luchador de Star Wars
 */
export class StarWars extends Fighter {
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
      protected planetaNatal: string, protected raza: string,
      protected portadorFuerza: boolean, protected titulos: string[]) {
    super(nombre, 'starwars', altura, peso, ataque, defensa, velocidad, hp);
  }
  /**
   * Getter de planetaNatal
   * @return {string}
   */
  getPlanetaNatal(): string {
    return this.planetaNatal;
  }
  /**
   * Getter de raza
   * @return {string}
   */
  getRaza(): string {
    return this.raza;
  }
  /**
   * Getter de poderes
   * @return {boolean}
   */
  isPortadorFuerza(): boolean {
    return this.portadorFuerza;
  }
  /**
   * Getter de activo
   * @return {string[]}
   */
  getTitulos(): string[] {
    return this.titulos;
  }
}

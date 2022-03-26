import {Fighter} from './fighter';

/**
 * Clase para representar un luchador de Star Wars
 */
export class DragonBall extends Fighter {
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
    protected planetaNatal: string, protected especie: string,
    protected transformaciones: string[], protected fusiones: string[]) {
    super(nombre, 'dragonball', altura, peso, ataque, defensa, velocidad, hp);
  }

  /**
   * Getter de planetaNatal
   * @return {string}
   */
  getPlanetaNatal(): string {
    return this.planetaNatal;
  }
  /**
   * Getter de especie
   * @return {string}
   */
  getEspecie(): string {
    return this.especie;
  }
  /**
   * Getter de transformaciones
   * @return {string[]}
   */
  getTransformaciones(): string[] {
    return this.transformaciones;
  }
  /**
   * getter de fusiones
   * @return {string[]}
   */
  getFusiones(): string[] {
    return this.fusiones;
  }
}

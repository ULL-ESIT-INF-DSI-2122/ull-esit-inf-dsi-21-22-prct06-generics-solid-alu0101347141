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
      protected poderes: string[], protected afiliaciones: string[]) {
    super(nombre, 'marvel', altura, peso, ataque, defensa, velocidad, hp);
  }
}

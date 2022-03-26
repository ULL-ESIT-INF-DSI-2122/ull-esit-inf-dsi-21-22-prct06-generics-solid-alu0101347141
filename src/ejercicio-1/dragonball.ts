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
    protected planetaNatal: string, protected raza: string,
    protected portadorFuerza: boolean, protected titulos: string[]) {
    super(nombre, 'dragonball', altura, peso, ataque, defensa, velocidad, hp);
  }
}

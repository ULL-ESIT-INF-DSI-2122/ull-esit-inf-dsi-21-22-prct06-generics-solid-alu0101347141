import {Marvel} from './marvel';
import {DC} from './dc';
import {StarWars} from './starwars';
import {DragonBall} from './dragonball';

type Universo = Marvel | DC | StarWars | DragonBall;

/**
 * Clase para simular un combate
 */
export class Combat {
  /**
   * Constructor de la clase Combat
   * @param {[Universo, Universo]} adversarios
   */
  constructor(protected adversarios: [Universo, Universo]) {};
  /**
   * Getter de ambos adversarios
   * @return {[Universo, Universo]}
   */
  getAdversarios(): [Universo, Universo] {
    return this.adversarios;
  }
  /**
   * Método para comenzar y simular el combate Pokemon
   * @return {string} Devuelve una cadena con el vencedor del combate
   */
  start(): string {
    const vencedor: string = 'El vencedor del combate es: ';
    return vencedor;
  }
}

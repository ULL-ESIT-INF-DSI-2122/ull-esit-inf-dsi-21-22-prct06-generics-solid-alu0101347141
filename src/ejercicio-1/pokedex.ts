import {Marvel} from './marvel';
import {DC} from './dc';
import {StarWars} from './starwars';
import {DragonBall} from './dragonball';

type Universo = Marvel | DC | StarWars | DragonBall;

/**
 * Clase de Pokedex universal (admite personajes de todos los universos)
 */
export class Pokedex {
  /**
   * Constructor de la clase Pokedex
   */
  constructor(protected elementos: Universo[]) {}
  /**
   * Función para obtener la base de datos almacenada en la Pokedex
   * @return {Universo[]} Devuelve la lista de Pokemon almacenada en la Pokedex
   */
  getLista(): Universo[] {
    return this.elementos;
  }
  /**
     * Función para añadir uno o varios Pokemon a la base de datos de la Pokedex
     * @param {[Universo, ...Universo[]]} elementos
     */
  añadir(elementos: [Universo, ...Universo[]]) {
    for (let i: number = 0; i < elementos.length; i++) {
      this.elementos.push(elementos[i]);
    }
  }
  /**
     * Función para eliminar a uno o varios Pokemon de la base de datos de la Pokedex
     * @param {[string, ...string[]]} elementos
     */
  borrar(elementos: [string, ...string[]]) {
    for (let i: number = 0; i < this.elementos.length; i++) {
      for (let j: number = 0; j < elementos.length; j++) {
        if (this.elementos[i].getNombre() == elementos[j]) {
          this.elementos.splice(i, 1);
        }
      }
    }
  }
}

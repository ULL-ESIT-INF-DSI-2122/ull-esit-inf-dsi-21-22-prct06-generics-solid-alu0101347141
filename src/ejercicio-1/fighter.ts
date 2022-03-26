/**
 * Clase para representar los rasgos básicos de un luchador
 */
export abstract class Fighter {
/**
 *
 * @param {string} nombre
 * @param {string} universo
 * @param {number} altura
 * @param {number} peso
 *
 */
  constructor(protected nombre: string, protected universo: string, protected altura: number, protected peso: number,
  protected ataque: number, protected defensa: number, protected velocidad: number, protected hp: number) {
  }
}

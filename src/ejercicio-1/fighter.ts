/**
 * Clase para representar los rasgos básicos de un luchador
 */
export abstract class Fighter {
/**
 *
 * @param {string} nombre
 * @param {number} altura
 * @param {number} peso
 */
  constructor(protected nombre: string, protected altura: number, protected peso: number) {
  }
}

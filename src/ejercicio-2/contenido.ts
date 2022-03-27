/**
 *
 */
export class Pelicula {
/**
 *
 * @param {string} nombre
 * @param {number} duracion
 * @param {string} fecha
 * @param {string} director
 * @param {string} guionista
 * @param {string[]} reparto
 * @param {string[]} generos
 */
  constructor(private nombre: string, private duracion: number, private fecha: string,
  private director: string, private guionista: string, private reparto: string[],
  private generos: string[]) {}
}

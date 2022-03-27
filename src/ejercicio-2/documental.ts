/**
 * Clase para representar un documental
 */
export class Documental {
  /**
   * Constructor de la clase Documental
   * @param {string} nombre
   * @param {number[]} episodios // Cada elemento tendrá la cantidad de episodios por temporada
   * @param {string} fecha
   * @param {string} productor
   * @param {string} narrador
   * @param {string[]} reparto
   * @param {string[]} temas
   */
  constructor(private nombre: string, private episodios: number[], private fecha: string,
    private productor: string, private narrador: string, private reparto: string[],
    private temas: string[]) {}
}

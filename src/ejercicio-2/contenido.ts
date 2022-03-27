/**
 * Clase para representar una película
 */
export class Pelicula {
/**
 * Constructor de la clase Pelicula
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

/**
 * Clase para representar una serie
 */
export class Serie {
  /**
   * Constructor de la clase Serie
   * @param {string} nombre
   * @param {number[]} episodios // Cada elemento tendrá la cantidad de episodios por temporada
   * @param {string} fecha
   * @param {string} productor
   * @param {string[]} guionistas
   * @param {string[]} reparto
   * @param {string[]} generos
   */
  constructor(private nombre: string, private episodios: number[], private fecha: string,
    private productor: string, private guionistas: string[], private reparto: string[],
    private generos: string[]) {}
}

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

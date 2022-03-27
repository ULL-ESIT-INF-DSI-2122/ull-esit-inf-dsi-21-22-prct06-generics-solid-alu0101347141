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
   * @param {number} calificacion
   */
  constructor(private nombre: string, private duracion: number, private fecha: string,
    private director: string, private guionista: string, private reparto: string[],
    private generos: string[], private calificacion: number) {}

  /**
     * Getter de nombre
     * @return {string}
     */
  getNombre(): string {
    return this.nombre;
  }
  /**
     * Getter de duracion
     * @return {number}
     */
  getDuracion(): number {
    return this.duracion;
  }
  /**
     * Getter de fecha
     * @return {string}
     */
  getFecha(): string {
    return this.fecha;
  }
  /**
     * Getter de director
     * @return {string}
     */
  getDirector(): string {
    return this.director;
  }
  /**
     * Getter de guionista
     * @return {string}
     */
  getGuionista(): string {
    return this.guionista;
  }
  /**
     * Getter de reparto
     * @return {string[]}
     */
  getReparto(): string[] {
    return this.reparto;
  }
  /**
     * Getter de generos
     * @return {string[]}
     */
  getGeneros(): string[] {
    return this.generos;
  }
  /**
   * Getter de generos
   * @return {number}
   */
  getCalificacion(): number {
    return this.calificacion;
  }
}


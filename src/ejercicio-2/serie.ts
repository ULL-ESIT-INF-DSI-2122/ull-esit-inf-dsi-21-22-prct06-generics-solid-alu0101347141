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
   * @param {string[]} reparto
   * @param {string[]} generos
   * @param {number} calificacion
   */
  constructor(private nombre: string, private episodios: number[], private fecha: string,
    private productor: string, private reparto: string[],
    private generos: string[], private calificacion: number) {}

  /**
     * Getter de nombre
     * @return {string}
     */
  getNombre(): string {
    return this.nombre;
  }
  /**
     * Getter de cantidad de episodios por temporada
     * @return {number[]}
     */
  getEpisodiosPorTemporada(): number[] {
    return this.episodios;
  }
  /**
     * Getter de cantidad de episodios totales
     * @return {number}
     */
  getEpisodiosTotales(): number {
    let total: number = 0;
    this.episodios.forEach(function(a) {
      total += a;
    });
    return total;
  }
  /**
     * Getter de fecha
     * @return {string}
     */
  getFecha(): string {
    return this.fecha;
  }
  /**
     * Getter de productor
     * @return {string}
     */
  getProductor(): string {
    return this.productor;
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


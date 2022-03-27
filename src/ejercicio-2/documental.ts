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
    private productor: string, private narrador: string, private temas: string[]) {}
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
     * Getter de narrador
     * @return {string}
     */
  getGuionista(): string {
    return this.narrador;
  }
  /**
     * Getter de temas
     * @return {string[]}
     */
  getTemas(): string[] {
    return this.temas;
  }
}


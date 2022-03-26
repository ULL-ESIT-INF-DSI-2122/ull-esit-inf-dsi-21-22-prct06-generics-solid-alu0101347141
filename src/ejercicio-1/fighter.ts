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
 * @param {number} ataque
 * @param {number} defensa
 * @param {number} velocidad
 * @param {number} hp
 */
  constructor(protected readonly nombre: string, protected readonly universo: string, protected altura: number, protected peso: number,
  protected ataque: number, protected defensa: number, protected velocidad: number, protected hp: number, protected frases: string[]) {
  }
  /**
   * Getter de nombre
   * @return {string}
   */
  getNombre(): string {
    return this.nombre;
  }
  /**
   * Getter de universo
   * @return {string}
   */
  getUniverso(): string {
    return this.universo;
  }
  /**
   * Getter de altura
   * @return {number}
   */
  getAltura(): number {
    return this.altura;
  }
  /**
   * Getter de peso
   * @return {number}
   */
  getPeso(): number {
    return this.peso;
  }
  /**
   * Getter de ataque
   * @return {number}
   */
  getAtaque(): number {
    return this.ataque;
  }
  /**
   * Getter de defensa
   * @return {number}
   */
  getDefensa(): number {
    return this.defensa;
  }
  /**
   * Getter de velocidad
   * @return {number}
   */
  getVelocidad(): number {
    return this.velocidad;
  }
  /**
   * Getter de HP
   * @return {number}
   */
  getHp(): number {
    return this.hp;
  }
  /**
   * Getter de HP
   * @return {number}
   */
  talk(): string {
    return this.frases[Math.floor(Math.random() * (this.frases.length))];
  }
}

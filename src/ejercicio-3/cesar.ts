/**
 * Clase para generar el Cifrado César
 */
export class Cesar {
  /**
   *
   * @param {string} alfabeto
   */
  constructor(private alfabeto: string, private clave: string) {}
  /**
   *
   * @param {string} mensaje
   * @return {string}
   */
  cifrar(mensaje: string): string {
    let cifrado: string = '';
    for (let i: number = 0; i < mensaje.length; i++) {
      const char: string = this.clave[i%this.clave.length];
      cifrado += this.alfabeto[(this.alfabeto.indexOf(mensaje[i]) + this.alfabeto.indexOf(char))%this.alfabeto.length];
    }
    return cifrado;
  }
}

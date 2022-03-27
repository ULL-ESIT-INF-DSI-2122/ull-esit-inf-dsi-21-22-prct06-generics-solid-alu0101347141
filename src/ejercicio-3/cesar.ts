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
      cifrado += this.alfabeto[((this.alfabeto.indexOf(mensaje[i])) + (this.alfabeto.indexOf(char)+1))%this.alfabeto.length];
    }
    return cifrado;
  }
  /**
   *
   * @param {string} cifrado
   * @return {string}
   */
  descifrar(cifrado: string): string {
    let mensaje: string = '';
    for (let i: number = 0; i < cifrado.length; i++) {
      const char: string = this.clave[i%this.clave.length];
      let index: number = ((this.alfabeto.indexOf(cifrado[i])) - (this.alfabeto.indexOf(char)+1));
      if (index < 0) {
        index += this.alfabeto.length;
      }
      mensaje += this.alfabeto[index];
    }
    return mensaje;
  }
}

import {Marvel} from './marvel';
import {DC} from './dc';
import {StarWars} from './starwars';
import {DragonBall} from './dragonball';

type Universo = Marvel | DC | StarWars | DragonBall;

/**
 * Clase para simular un combate
 */
export class Combat {
  /**
   * Constructor de la clase Combat
   * @param {[Universo, Universo]} adversarios
   */
  constructor(protected adversarios: [Universo, Universo]) {};
  /**
   * Getter de ambos adversarios
   * @return {[Universo, Universo]}
   */
  getAdversarios(): [Universo, Universo] {
    return this.adversarios;
  }
  /**
   * Método para comenzar y simular el combate Pokemon
   * @return {string} Devuelve una cadena con el vencedor del combate
   */
  start(): string {
    let turno: number;
    let iterador: number = 0;
    const dañoSufrido: [number, number] = [0, 0];
    console.log('*****************************');
    console.log(this.adversarios[0].getNombre() + ' VS ' + this.adversarios[1].getNombre());
    console.log('*****************************\n');
    while ((this.adversarios[0].getHp() > dañoSufrido[0]) && (this.adversarios[1].getHp() > dañoSufrido[1])) {
      turno = iterador % 2;
      console.log(this.adversarios[turno].getNombre() + ' ataca y dice: ' + this.adversarios[turno].talk() + '\n');
      switch (turno) {
        case 0:
          if (this.adversarios[0].getUniverso() == 'dragonball') {
            dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 2;
          } if ((this.adversarios[0].getUniverso() == 'marvel') || (this.adversarios[0].getUniverso() == 'dc')) {
            dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 1;
          } if (this.adversarios[0].getUniverso() == 'starwars') {
            dañoSufrido[1] += 50 * (this.adversarios[0].getAtaque() / this.adversarios[1].getDefensa()) * 0.5;
          }
          break;
        case 1:
          if (this.adversarios[1].getUniverso() == 'dragonball') {
            dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 2;
          } if ((this.adversarios[0].getUniverso() == 'marvel') || (this.adversarios[0].getUniverso() == 'dc')) {
            dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 1;
          } if (this.adversarios[0].getUniverso() == 'starwars') {
            dañoSufrido[0] += 50 * (this.adversarios[1].getAtaque() / this.adversarios[0].getDefensa()) * 0.5;
          }
          break;
      }
      console.log('\tSalud restante de los combatientes:');
      console.log('\t--------------------------------');
      console.log('\t' + this.adversarios[0].getNombre(), '= ', (this.adversarios[0].getHp()-dañoSufrido[0]).toFixed());
      console.log('\t' + this.adversarios[1].getNombre(), '= ', (this.adversarios[1].getHp()-dañoSufrido[1]).toFixed(), '\n');
      iterador++;
    }
    let vencedor: string = 'El vencedor del combate es: ';
      dañoSufrido[0] >= this.adversarios[0].getHp() ? vencedor += this.adversarios[1].getNombre() : vencedor += this.adversarios[0].getNombre();
      console.log(vencedor);
      return vencedor;
  }
}

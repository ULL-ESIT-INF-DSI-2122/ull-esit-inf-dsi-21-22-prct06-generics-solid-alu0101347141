import {Serie} from './serie';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Clase para representar una colección de series
 */
export class ColeccionSeries extends BasicStreamableCollection<Serie> {
  /**
   *
   * @param {Serie[]} coleccion
   */
  constructor(coleccion: Serie[]) {
    super(coleccion);
  }
}

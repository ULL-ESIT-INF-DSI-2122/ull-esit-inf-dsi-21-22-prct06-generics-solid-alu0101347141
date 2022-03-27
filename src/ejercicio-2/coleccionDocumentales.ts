import {Documental} from './documental';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Clase para representar una colección de series
 */
export class ColeccionDocumentales extends BasicStreamableCollection<Documental> {
  /**
   *
   * @param {Documental[]} coleccion
   */
  constructor(coleccion: Documental[]) {
    super(coleccion);
  }
}

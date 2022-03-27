import {Pelicula} from './pelicula';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
* Clase para representar una colección de peliculas
*/
export class ColeccionPeliculas extends BasicStreamableCollection<Pelicula> {
  /**
  *
  * @param {Pelicula[]} coleccion
  */
  constructor(coleccion: Pelicula[]) {
    super(coleccion);
  }
}

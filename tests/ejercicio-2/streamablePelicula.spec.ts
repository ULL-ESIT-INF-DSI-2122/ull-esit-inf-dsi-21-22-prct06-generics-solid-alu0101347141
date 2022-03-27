import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-2/pelicula';
import {ColeccionPeliculas} from '../../src/ejercicio-2/coleccionPeliculas';

describe('ColeccionSeries', () => {
  it('Debe existir una clase ColeccionSeries', () => {
    expect(ColeccionPeliculas).to.exist;
  });
  const pelicula1 = new Pelicula('Iron Man 1', 126, '2/5/2008', 'John Favreu', 'Mark Fergus', ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
      ['Acción', 'Ciencia ficción', 'Superhéroes'], 8.7);
  const coleccionTest = new ColeccionPeliculas([pelicula1]);
  it('Puede almacenar una colección de películas', () => {
    expect(coleccionTest.getColeccion()).to.deep.equal([pelicula1]);
  });
});

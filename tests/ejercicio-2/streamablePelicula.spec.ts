import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-2/pelicula';
import {ColeccionPeliculas} from '../../src/ejercicio-2/coleccionPeliculas';

describe('ColeccionPeliculas', () => {
  it('Debe existir una clase ColeccionPeliculas', () => {
    expect(ColeccionPeliculas).to.exist;
  });
  const pelicula1 = new Pelicula('Iron Man 1', 126, '2/5/2008', 'John Favreu', 'Mark Fergus', ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
      ['Acción', 'Ciencia ficción', 'Superhéroes'], 8.7);
  const pelicula2 = new Pelicula('Iron Man 2', 124, '28/4/2010', 'John Favreu', 'Justin Theroux', ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle'],
      ['Acción', 'Ciencia ficción', 'Superhéroes'], 5.9);
  const pelicula3 = new Pelicula('Iron Man 3', 131, '14/4/2013', 'Shane Black', 'Drew Pearce', ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Don Cheadle'],
      ['Acción', 'Ciencia ficción', 'Superhéroes'], 7.2);
  const coleccionTest = new ColeccionPeliculas([pelicula1, pelicula2, pelicula3]);
  it('Puede almacenar una colección de películas', () => {
    expect(coleccionTest.getColeccion()).to.deep.equal([pelicula1, pelicula2, pelicula3]);
  });
});

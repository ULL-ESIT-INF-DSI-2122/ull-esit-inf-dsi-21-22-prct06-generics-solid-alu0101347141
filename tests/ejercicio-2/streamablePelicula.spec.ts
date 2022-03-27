import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-2/pelicula';
import {ColeccionPeliculas} from '../../src/ejercicio-2/coleccionPeliculas';

describe('ColeccionSeries', () => {
  it('Debe existir una clase ColeccionSeries', () => {
    expect(ColeccionPeliculas).to.exist;
  });
});
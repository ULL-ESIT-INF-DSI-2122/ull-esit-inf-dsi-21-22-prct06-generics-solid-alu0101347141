import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-2/pelicula';
import {ColeccionDocumentales} from '../../src/ejercicio-2/coleccionDocumentales';

describe('ColeccionDocumentales', () => {
  it('Debe existir una clase ColeccionDocumentales', () => {
    expect(ColeccionDocumentales).to.exist;
  });
});

import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-2/documental';
import {ColeccionDocumentales} from '../../src/ejercicio-2/coleccionDocumentales';

describe('ColeccionDocumentales', () => {
  it('Debe existir una clase ColeccionDocumentales', () => {
    expect(ColeccionDocumentales).to.exist;
  });
  const documental1 = new Documental('Cosmos: Una odisea de tiempo y espacio', [13], '9/3/2014', 'Seth MacFarlane', 'Neil deGrasse Tyson',
      ['Ciencia', 'Espacio'], 9.5);
  const coleccionTest = new ColeccionDocumentales([documental1]);
  it('Puede almacenar una colección de documentales', () => {
    expect(coleccionTest.getColeccion()).to.deep.equal([documental1]);
  });
});

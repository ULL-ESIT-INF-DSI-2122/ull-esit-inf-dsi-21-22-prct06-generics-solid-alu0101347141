import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-2/serie';
import {ColeccionSeries} from '../../src/ejercicio-2/coleccionSeries';

describe('ColeccionSeries', () => {
  it('Debe existir una clase ColeccionSeries', () => {
    expect(ColeccionSeries).to.exist;
  });
  const serie1 = new Serie('Breaking Bad', [7, 13, 13, 13, 16], '20/1/2008', 'Vince Gilligan', ['Bryan Cranston', 'Aaron Paul', 'Giancarlo Esposito'],
      ['Drama criminal', 'Suspense', 'Humor negro'], 9.5);
  const serie2 = new Serie('Juego de Tronos', [10, 10, 10, 10, 10, 10, 7, 6], '17/4/2011', 'David Benioff', ['Emilia Clarke', 'Kit Harington', 'Sophie Turner'],
      ['Fantasía', 'Drama', 'Aventura'], 9.2);
  const serie3 = new Serie('Juego del Calamar', [9], '17/9/2021', 'Hwang Dong-Hyuk', ['Hoyeon Jung', 'Lee Jung-jae', 'Gong Yoo'],
      ['Suspense', 'Supervivencia', 'Drama'], 9.2);
  const serie4 = new Serie('The Mandalorian', [8, 8], '12/11/2019', 'Jon Favreu', ['Pedro Pascal'],
      ['Space western', 'Ciencia ficción', 'Fantasía'], 9.2);
  const coleccionTest = new ColeccionSeries([serie1, serie2, serie3]);
  it('Debe almacenar una colección de series', () => {
    expect(coleccionTest.getColeccion()).to.deep.equal([serie1, serie2, serie3]);
  });
  it('Se puede añadir una nueva serie', () => {
    coleccionTest.añadir(serie4);
    expect(coleccionTest.getColeccion()).to.deep.equal([serie1, serie2, serie3, serie4]);
  });
  it('Se puede eliminar una serie', () => {
    coleccionTest.borrar(3);
    expect(coleccionTest.getColeccion()).to.deep.equal([serie1, serie2, serie3]);
  });
  it('Se puede recibir el número de series', () => {
    expect(coleccionTest.getCantidad()).to.deep.equal(3);
  });
  it('Se puede buscar una serie por su fecha', () => {
    expect(coleccionTest.searchByFecha('20/1/2008')).to.deep.equal([serie1]);
    expect(coleccionTest.searchByFecha('17/4/2011')).to.deep.equal([serie2]);
  });
  it('Se puede buscar una serie por nombre', () => {
    expect(coleccionTest.searchByNombre('Juego')).to.deep.equal([serie2, serie3]);
  });
});

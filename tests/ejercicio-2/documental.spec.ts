import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-2/documental';

describe('Documental', () => {
  it('Debe existir una clase Documental', () => {
    expect(Documental).to.exist;
  });
  const documental1 = new Documental('Cosmos: Una odisea de tiempo y espacio', [13], '9/3/2014', 'Seth MacFarlane', 'Neil deGrasse Tyson',
      ['Ciencia', 'Espacio'], 9.5);
  it('Se puede recibir su nombre', () => {
    expect(documental1.getNombre()).to.be.equal('Cosmos: Una odisea de tiempo y espacio');
  });
  it('Se puede recibir su cantidad de episodios por temporada', () => {
    expect(documental1.getEpisodiosPorTemporada()).to.deep.equal([13]);
  });
  it('Se puede recibir su cantidad total de episodios', () => {
    expect(documental1.getEpisodiosTotales()).to.be.equal(13);
  });
  it('Se puede recibir su fecha', () => {
    expect(documental1.getFecha()).to.be.equal('9/3/2014');
  });
  it('Se puede recibir su productor', () => {
    expect(documental1.getProductor()).to.be.equal('Seth MacFarlane');
  });
  it('Se puede recibir su reparto', () => {
    expect(documental1.getNarrador()).to.be.equal('Neil deGrasse Tyson');
  });
  it('Se pueden recibir sus géneros', () => {
    expect(documental1.getTemas()).to.deep.equal(['Ciencia', 'Espacio']);
  });
  it('Se pueden recibir su calificacion', () => {
    expect(documental1.getCalificacion()).to.be.equal(9.5);
  });
});

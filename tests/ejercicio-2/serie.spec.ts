import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-2/serie';

describe('Serie', () => {
  it('Debe existir una clase Serie', () => {
    expect(Serie).to.exist;
  });
  const serie1 = new Serie('Breaking Bad', [7, 13, 13, 13, 16], '20/1/2008', 'Vince Gilligan', ['Bryan Cranston', 'Aaron Paul', 'Giancarlo Esposito'],
      ['Drama criminal', 'Suspense', 'Humor negro'], 9.5);
  it('Se puede recibir su nombre', () => {
    expect(serie1.getNombre()).to.be.equal('Breaking Bad');
  });
  it('Se puede recibir su cantidad de episodios por temporada', () => {
    expect(serie1.getEpisodiosPorTemporada()).to.deep.equal([7, 13, 13, 13, 16]);
  });
  it('Se puede recibir su cantidad total de episodios', () => {
    expect(serie1.getEpisodiosTotales()).to.be.equal(62);
  });
  it('Se puede recibir su fecha', () => {
    expect(serie1.getFecha()).to.be.equal('20/1/2008');
  });
  it('Se puede recibir su productor', () => {
    expect(serie1.getProductor()).to.be.equal('Vince Gilligan');
  });
  it('Se puede recibir su reparto', () => {
    expect(serie1.getReparto()).to.deep.equal(['Bryan Cranston', 'Aaron Paul', 'Giancarlo Esposito']);
  });
  it('Se pueden recibir sus géneros', () => {
    expect(serie1.getGeneros()).to.deep.equal(['Drama criminal', 'Suspense', 'Humor negro']);
  });
  it('Se pueden recibir su calificacion', () => {
    expect(serie1.getCalificacion()).to.be.equal(9.5);
  });
});

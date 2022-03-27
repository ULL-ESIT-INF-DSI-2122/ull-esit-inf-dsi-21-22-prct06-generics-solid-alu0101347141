import 'mocha';
import {expect} from 'chai';
import {Pelicula} from '../../src/ejercicio-2/pelicula';

describe('Pelicula', () => {
  it('Debe existir una clase Pelicula', () => {
    expect(Pelicula).to.exist;
  });
  const pelicula1 = new Pelicula('Iron Man 1', 126, '2/5/2008', 'John Favreu', 'Mark Fergus', ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard'],
      ['Acción', 'Ciencia ficción', 'Superhéroes'], 8.7);
  it('Se puede recibir su nombre', () => {
    expect(pelicula1.getNombre()).to.be.equal('Iron Man 1');
  });
  it('Se puede recibir su fecha', () => {
    expect(pelicula1.getFecha()).to.be.equal('2/5/2008');
  });
  it('Se puede recibir su duracion', () => {
    expect(pelicula1.getDuracion()).to.be.equal(126);
  });
  it('Se puede recibir su director', () => {
    expect(pelicula1.getDirector()).to.be.equal('John Favreu');
  });
  it('Se puede recibir su guionista', () => {
    expect(pelicula1.getGuionista()).to.be.equal('Mark Fergus');
  });
  it('Se puede recibir su reparto', () => {
    expect(pelicula1.getReparto()).to.deep.equal(['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard']);
  });
  it('Se pueden recibir sus géneros', () => {
    expect(pelicula1.getGeneros()).to.deep.equal(['Acción', 'Ciencia ficción', 'Superhéroes']);
  });
  it('Se pueden recibir su calificacion', () => {
    expect(pelicula1.getCalificacion()).to.be.equal(8.7);
  });
});

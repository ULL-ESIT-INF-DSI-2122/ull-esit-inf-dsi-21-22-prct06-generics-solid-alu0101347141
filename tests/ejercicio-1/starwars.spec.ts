import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/fighter';
import {StarWars} from '../../src/ejercicio-1/starwars';

describe('StarWars', () => {
  it('Debe existir una clase StarWars', () => {
    expect(StarWars).to.exist;
  });
  const kenobi = new StarWars('Obi-Wan Kenobi', 1.82, 80, 60, 50, 60, 300, 'Stewjon', 'humano',
      true, ['Maestro Jedi', 'Miembro del Consejo', 'General Jedi'], ['Que la fuerza no te acompañe']);
  it('Una instancia de StarWars debe ser una instancia de Fighter', () => {
    expect(kenobi instanceof Fighter).to.be.equal(true);
  });
  describe('Debe poder almacenar los siguientes atributos (Fighter)', () => {
    it('- Nombre', () => {
      expect(kenobi.getNombre()).to.be.equal('Obi-Wan Kenobi');
    });
    it('- Universo', () => {
      expect(kenobi.getUniverso()).to.be.equal('starwars');
    });
    it('- Altura', () => {
      expect(kenobi.getAltura()).to.be.equal(1.82);
    });
    it('- Peso', () => {
      expect(kenobi.getPeso()).to.be.equal(80);
    });
    it('- Ataque', () => {
      expect(kenobi.getAtaque()).to.be.equal(60);
    });
    it('- Defensa', () => {
      expect(kenobi.getDefensa()).to.be.equal(50);
    });
    it('- Velocidad', () => {
      expect(kenobi.getVelocidad()).to.be.equal(60);
    });
    it('- HP', () => {
      expect(kenobi.getHp()).to.be.equal(300);
    });
  });
  describe('Debe poder almacenar los siguientes atributos específicos', () => {
    it('- Planeta natal', () => {
      expect(kenobi.getPlanetaNatal()).to.be.equal('Stewjon');
    });
    it('- Raza', () => {
      expect(kenobi.getRaza()).to.be.equal('humano');
    });
    it('- Es portador de la fuerza', () => {
      expect(kenobi.isPortadorFuerza()).to.be.equal(true);
    });
    it('- Títulos', () => {
      expect(kenobi.getTitulos()).to.deep.equal(['Maestro Jedi', 'Miembro del Consejo', 'General Jedi']);
    });
  });
});

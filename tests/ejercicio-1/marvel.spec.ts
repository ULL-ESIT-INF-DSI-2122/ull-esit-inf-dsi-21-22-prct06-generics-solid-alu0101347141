import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/fighter';
import {Marvel} from '../../src/ejercicio-1/marvel';

describe('Marvel', () => {
  it('Debe existir una clase Marvel', () => {
    expect(Marvel).to.exist;
  });
  const thor = new Marvel('Thor', 1.98, 290.3, 90, 65, 50, 800, 'Thor Odinson', ['Loki', 'Hela'],
      ['electricidad', 'mjolnir', 'viento'], ['Vengadores'], ['¡POR ASGARD!']);
  it('Una instancia de Marvel debe ser una instancia de Fighter', () => {
    expect(thor instanceof Fighter).to.be.equal(true);
  });
  describe('Debe poder almacenar los siguientes atributos (Fighter)', () => {
    it('- Nombre', () => {
      expect(thor.getNombre()).to.be.equal('Thor');
    });
    it('- Universo', () => {
      expect(thor.getUniverso()).to.be.equal('marvel');
    });
    it('- Altura', () => {
      expect(thor.getAltura()).to.be.equal(1.98);
    });
    it('- Peso', () => {
      expect(thor.getPeso()).to.be.equal(290.3);
    });
    it('- Ataque', () => {
      expect(thor.getAtaque()).to.be.equal(90);
    });
    it('- Defensa', () => {
      expect(thor.getDefensa()).to.be.equal(65);
    });
    it('- Velocidad', () => {
      expect(thor.getVelocidad()).to.be.equal(50);
    });
    it('- HP', () => {
      expect(thor.getHp()).to.be.equal(800);
    });
  });
  describe('Debe poder almacenar los siguientes atributos específicos', () => {
    it('- Nombre Real', () => {
      expect(thor.getNombreReal()).to.be.equal('Thor Odinson');
    });
    it('- Nemesis', () => {
      expect(thor.getNemesis()).to.deep.equal(['Loki', 'Hela']);
    });
    it('- Poderes', () => {
      expect(thor.getPoderes()).to.deep.equal(['electricidad', 'mjolnir', 'viento']);
    });
    it('- Afiliaciones', () => {
      expect(thor.getAfiliaciones()).to.deep.equal(['Vengadores']);
    });
  });
  describe('Métodos', () => {
    it('Función para decir una frase típica', () => {
      expect(thor.talk()).to.be.equal('¡POR ASGARD!');
    });
  });
});

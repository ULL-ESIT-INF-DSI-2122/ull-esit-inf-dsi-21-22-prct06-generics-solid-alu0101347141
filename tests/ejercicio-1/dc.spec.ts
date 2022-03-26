import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/fighter';
import {DC} from '../../src/ejercicio-1/dc';

describe('DC', () => {
  it('Debe existir una clase DC', () => {
    expect(DC).to.exist;
  });
  const batman = new DC('Batman', 1.88, 95, 40, 50, 80, 300, 'Bruce Wayne', ['Joker', 'Enigma', 'Dos Caras'],
      ['gadgets', 'intelecto', 'sigilo'], true, ['Soy Batman.']);
  it('Una instancia de DC debe ser una instancia de Fighter', () => {
    expect(batman instanceof Fighter).to.be.equal(true);
  });
  describe('Debe poder almacenar los siguientes atributos (Fighter)', () => {
    it('- Nombre', () => {
      expect(batman.getNombre()).to.be.equal('Batman');
    });
    it('- Universo', () => {
      expect(batman.getUniverso()).to.be.equal('dc');
    });
    it('- Altura', () => {
      expect(batman.getAltura()).to.be.equal(1.88);
    });
    it('- Peso', () => {
      expect(batman.getPeso()).to.be.equal(95);
    });
    it('- Ataque', () => {
      expect(batman.getAtaque()).to.be.equal(40);
    });
    it('- Defensa', () => {
      expect(batman.getDefensa()).to.be.equal(50);
    });
    it('- Velocidad', () => {
      expect(batman.getVelocidad()).to.be.equal(80);
    });
    it('- HP', () => {
      expect(batman.getHp()).to.be.equal(300);
    });
  });
  describe('Debe poder almacenar los siguientes atributos específicos', () => {
    it('- Nombre Real', () => {
      expect(batman.getNombreReal()).to.be.equal('Bruce Wayne');
    });
    it('- Nemesis', () => {
      expect(batman.getNemesis()).to.deep.equal(['Joker', 'Enigma', 'Dos Caras']);
    });
    it('- Poderes', () => {
      expect(batman.getPoderes()).to.deep.equal(['gadgets', 'intelecto', 'sigilo']);
    });
    it('- Actividad', () => {
      expect(batman.isActive()).to.be.equal(true);
    });
  });
  describe('Métodos', () => {
    it('Función para decir una frase típica', () => {
      expect(batman.talk()).to.be.equal('Soy Batman.');
    });
  });
});

import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/fighter';
import {DragonBall} from '../../src/ejercicio-1/dragonball';

describe('DragonBall', () => {
  it('Debe existir una clase DragonBall', () => {
    expect(DragonBall).to.exist;
  });
  const vegeta = new DragonBall('Vegeta', 1.75, 94.3, 85, 40, 95, 600, 'Planeta Vegeta', 'saiyajin', ['Mono Gigante', 'Supersaiyajin'], ['Gogeta', 'Yamta']);
  it('Una instancia de DragonBall debe ser una instancia de Fighter', () => {
    expect(vegeta instanceof Fighter).to.be.equal(true);
  });
  describe('Debe poder almacenar los siguientes atributos (Fighter)', () => {
    it('- Nombre', () => {
      expect(vegeta.getNombre()).to.be.equal('Vegeta');
    });
    it('- Universo', () => {
      expect(vegeta.getUniverso()).to.be.equal('dragonball');
    });
    it('- Altura', () => {
      expect(vegeta.getAltura()).to.be.equal(1.75);
    });
    it('- Peso', () => {
      expect(vegeta.getPeso()).to.be.equal(94.3);
    });
    it('- Ataque', () => {
      expect(vegeta.getAtaque()).to.be.equal(85);
    });
    it('- Defensa', () => {
      expect(vegeta.getDefensa()).to.be.equal(40);
    });
    it('- Velocidad', () => {
      expect(vegeta.getVelocidad()).to.be.equal(95);
    });
    it('- HP', () => {
      expect(vegeta.getHp()).to.be.equal(600);
    });
  });
  describe('Debe poder almacenar los siguientes atributos específicos', () => {
    it('- Planeta natal', () => {
      expect(vegeta.getPlanetaNatal()).to.be.equal('Planeta Vegeta');
    });
    it('- Especie', () => {
      expect(vegeta.getEspecie()).to.be.equal('saiyajin');
    });
    it('- Transformaciones', () => {
      expect(vegeta.getTransformaciones()).to.deep.equal(['Mono Gigante', 'Supersaiyajin']);
    });
    it('- Fusiones', () => {
      expect(vegeta.getFusiones()).to.deep.equal(['Gogeta', 'Yamta']);
    });
  });
});

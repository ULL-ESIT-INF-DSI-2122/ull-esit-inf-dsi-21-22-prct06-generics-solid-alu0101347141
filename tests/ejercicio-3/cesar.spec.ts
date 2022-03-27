import 'mocha';
import {expect} from 'chai';
import {Cesar} from '../../src/ejercicio-3/cesar';

describe('Cifrado Cesar', () => {
  it('Debe existir una clase Cesar', () => {
    expect(Cesar).to.exist;
  });
  const prueba = new Cesar('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  it('Permite cifrar', () => {
    expect(prueba.cifrar('HOLAESTOESUNAPRUEBA', 'CLAVE')).to.be.equal('KAMWJVFPAXXYBMWXPCW');
  });
  it('Permite descifrar', () => {
    expect(prueba.descifrar('KAMWJVFPAXXYBMWXPCW', 'CLAVE')).to.be.equal('HOLAESTOESUNAPRUEBA');
  });
});

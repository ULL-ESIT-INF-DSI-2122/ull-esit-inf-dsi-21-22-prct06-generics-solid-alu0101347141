import 'mocha';
import {expect} from 'chai';
import {Cesar} from '../../src/ejercicio-3/cesar';

describe('Cifrado Cesar', () => {
  it('Debe existir una clase Cesar', () => {
    expect(Cesar).to.exist;
  });
  const prueba = new Cesar('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'CLAVE');
  it('Permite cifrar', () => {
    expect(prueba.cifrar('HOLAESTOESUNAPRUEBA')).to.be.equal('KAMWJVFPAXXYBMWXPCW');
  });
  it('Permite descifrar', () => {
    expect(prueba.descifrar('KAMWJVFPAXXYBMWXPCW')).to.be.equal('HOLAESTOESUNAPRUEBA');
  });
});

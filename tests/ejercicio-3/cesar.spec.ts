import 'mocha';
import {expect} from 'chai';
import {Cesar} from '../../src/ejercicio-3/cesar';

describe('Cifrado Cesar', () => {
  it('Debe existir una clase Cesar', () => {
    expect(Cesar).to.exist;
  });
});

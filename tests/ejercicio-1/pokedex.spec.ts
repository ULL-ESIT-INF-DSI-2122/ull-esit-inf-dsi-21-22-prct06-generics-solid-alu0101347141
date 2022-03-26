import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

describe('Pokedex', () => {
  it('Debe existir una clase Pokedex universal', () => {
    expect(Pokedex).to.exist;
  });
});

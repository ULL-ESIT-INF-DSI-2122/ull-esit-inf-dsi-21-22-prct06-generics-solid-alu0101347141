import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-1/pokedex';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {DC} from '../../src/ejercicio-1/dc';
import {StarWars} from '../../src/ejercicio-1/starwars';
import {DragonBall} from '../../src/ejercicio-1/dragonball';

describe('Pokedex', () => {
  it('Debe existir una clase Pokedex universal', () => {
    expect(Pokedex).to.exist;
  });
});

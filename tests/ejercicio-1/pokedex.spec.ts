import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-1/pokedex';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {DC} from '../../src/ejercicio-1/dc';
import {StarWars} from '../../src/ejercicio-1/starwars';
import {DragonBall} from '../../src/ejercicio-1/dragonball';

describe('Pokedex Universal', () => {
  it('Debe existir una clase Pokedex universal', () => {
    expect(Pokedex).to.exist;
  });
  const hulk = new Marvel('Hulk', 3.00, 635.0, 100, 90, 30, 10000, 'Bruce Banner', ['Abominación', 'Thunderbolt Ross'],
      ['fuerza', 'radiacion'], ['Vengadores', 'Defensores'], ['¡¡HULK APLASTA!!', 'AAAAGRRGRR', 'GGRRRRGRR']);
  const goku = new DragonBall('Goku', 1.80, 89.2, 90, 60, 98, 560, 'Planeta Vegeta', 'saiyajin',
      ['Mono Gigante', 'Supersaiyajin'], ['Gogeta', 'Gotán', 'Kuhan'], ['¡No me rendiré!', 'Kame...hame...HAAA', '¡Alzad las manos!']);
  const batman = new DC('Batman', 1.88, 95, 40, 50, 80, 300, 'Bruce Wayne', ['Joker', 'Enigma', 'Dos Caras'],
      ['gadgets', 'intelecto', 'sigilo'], true, ['Soy Batman.']);
  const kenobi = new StarWars('Obi-Wan Kenobi', 1.82, 80, 60, 50, 60, 300, 'Stewjon', 'humano',
      true, ['Maestro Jedi', 'Miembro del Consejo', 'General Jedi'], ['Que la fuerza no te acompañe']);
  const thor = new Marvel('Thor', 1.98, 290.3, 90, 65, 50, 800, 'Thor Odinson', ['Loki', 'Hela'],
      ['electricidad', 'mjolnir', 'viento'], ['Vengadores'], ['¡POR ASGARD!']);
  const pokedexUniversal = new Pokedex([hulk, goku, batman, kenobi]);
  it('Una pokedex universal puede contener elementos de todos los universos', () => {
    expect(pokedexUniversal.getLista()).to.deep.equal([hulk, goku, batman, kenobi]);
  });
  it('Se pueden añadir personajes', () => {
    pokedexUniversal.añadir([thor]);
    expect(pokedexUniversal.getLista()).to.deep.equal([hulk, goku, batman, kenobi, thor]);
  });
  it('Se pueden borrar personajes', () => {
    pokedexUniversal.borrar(['Batman']);
    expect(pokedexUniversal.getLista()).to.deep.equal([hulk, goku, kenobi, thor]);
  });
});

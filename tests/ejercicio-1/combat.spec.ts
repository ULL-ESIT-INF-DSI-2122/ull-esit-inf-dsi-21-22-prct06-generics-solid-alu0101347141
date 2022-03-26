import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Marvel} from '../../src/ejercicio-1/marvel';
// import {DC} from '../../src/ejercicio-1/dc';
// import {StarWars} from '../../src/ejercicio-1/starwars';
import {DragonBall} from '../../src/ejercicio-1/dragonball';

describe('Combat', () => {
  it('Debe existir una clase Combat', () => {
    expect(Combat).to.exist;
  });
  const hulk = new Marvel('Hulk', 3.00, 635.0, 100, 90, 30, 10000, 'Bruce Banner', ['Abominación', 'Thunderbolt Ross'], ['fuerza', 'radiacion'], ['Vengadores', 'Defensores']);
  const goku = new DragonBall('Goku', 1.80, 89.2, 90, 60, 98, 560, 'Planeta Vegeta', 'saiyajin', ['Mono Gigante', 'Supersaiyajin'], ['Gogeta', 'Yamta']);
  const combate = new Combat([hulk, goku]);
  it('Almacena dos adversarios de cualquier universo', () => {
    expect(combate.getAdversarios()[0]).to.deep.equal(hulk);
    expect(combate.getAdversarios()[1]).to.deep.equal(goku);
  });
});

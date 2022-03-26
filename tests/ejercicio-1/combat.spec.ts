import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {DC} from '../../src/ejercicio-1/dc';
import {StarWars} from '../../src/ejercicio-1/starwars';
import {DragonBall} from '../../src/ejercicio-1/dragonball';

describe('Combat', () => {
  it('Debe existir una clase Combat', () => {
    expect(Combat).to.exist;
  });
  const hulk = new Marvel('Hulk', 3.00, 635.0, 100, 90, 30, 10000, 'Bruce Banner', ['Abominación', 'Thunderbolt Ross'],
      ['fuerza', 'radiacion'], ['Vengadores', 'Defensores'], ['¡¡HULK APLASTA!!', 'AAAAGRRGRR', 'GGRRRRGRR']);
  const goku = new DragonBall('Goku', 1.80, 89.2, 90, 60, 98, 560, 'Planeta Vegeta', 'saiyajin',
      ['Mono Gigante', 'Supersaiyajin'], ['Gogeta', 'Gotán', 'Kuhan'], ['¡No me rendiré!', 'Kame...hame...HAAA', '¡Alzad las manos!']);
  const batman = new DC('Batman', 1.88, 95, 40, 50, 80, 300, 'Bruce Wayne', ['Joker', 'Enigma', 'Dos Caras'],
      ['gadgets', 'intelecto', 'sigilo'], true, ['Soy Batman.']);
  const kenobi = new StarWars('Obi-Wan Kenobi', 1.82, 80, 60, 50, 60, 300, 'Stewjon', 'humano',
      true, ['Maestro Jedi', 'Miembro del Consejo', 'General Jedi'], ['Que la fuerza no te acompañe']);
  const combateHulkVSGoku = new Combat([hulk, goku]);
  const combateGokuVSBatman = new Combat([goku, batman]);
  const combateBatmanVSKenobi = new Combat([batman, kenobi]);
  const combateKenobiVSHulk = new Combat([kenobi, hulk]);
  it('Almacena dos adversarios de cualquier universo', () => {
    expect(combateHulkVSGoku.getAdversarios()[0]).to.deep.equal(hulk);
    expect(combateHulkVSGoku.getAdversarios()[1]).to.deep.equal(goku);
  });
  it('Se puede simular un combate', () => {
    expect(combateHulkVSGoku.start()).to.be.equal('El vencedor del combate es: Hulk');
    expect(combateGokuVSBatman.start()).to.be.equal('El vencedor del combate es: Goku');
    expect(combateBatmanVSKenobi.start()).to.be.equal('El vencedor del combate es: Obi-Wan Kenobi');
    expect(combateKenobiVSHulk.start()).to.be.equal('El vencedor del combate es: Hulk');
  });
});

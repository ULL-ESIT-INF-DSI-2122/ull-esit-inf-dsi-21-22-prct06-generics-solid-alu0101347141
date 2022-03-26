import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Marvel} from '../src/ejercicio-1/marvel';

describe('Fighter', () => {
  it('Debe existir una clase abstracta para representar luchadores', () => {
    expect(Fighter).to.exist;
  });
});

describe('Marvel', () => {
  it('Debe existir una clase Marvel que extienda Fighter', () => {
    expect(Marvel).to.exist;
  });
});

import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';

describe('Fighter', () => {
  it('Debe existir una clase abstracta para representar luchadores', () => {
    expect(Fighter).to.exist;
  });
});

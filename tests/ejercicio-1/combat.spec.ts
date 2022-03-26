import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/combat';

describe('Combat', () => {
  it('Debe existir una clase Combat', () => {
    expect(Combat).to.exist;
  });
});

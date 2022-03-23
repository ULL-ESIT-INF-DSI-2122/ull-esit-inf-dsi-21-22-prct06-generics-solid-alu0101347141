import 'mocha';
import {expect} from 'chai';
import {SearchableCollection} from '../src/ejercicio-PE';
import {NumericSearchableCollection} from '../src/ejercicio-PE';
import {StringSearchableCollection} from '../src/ejercicio-PE';


describe('SearchableCollection', () => {
  it('Debe existir una clase que implemente las interfaces genéricas Collectable y Searchable', () => {
    expect(SearchableCollection).to.exist;
  });
  const coleccionNumeros = new NumericSearchableCollection([2, 3, 3, 4, 3]);
  const coleccionCadenas = new StringSearchableCollection(['abba', 'cde', 'cdab', 'ef']);
  it('NumericSearchableCollection implementa correctamente la función search', () => {
    expect(coleccionNumeros.search(3)).to.deep.equal([3, 3, 3]);
  });
  it('StringSearchableCollection implementa correctamente la función search', () => {
    expect(coleccionCadenas.search('ab')).to.deep.equal(['abba', 'cdab']);
  });
});

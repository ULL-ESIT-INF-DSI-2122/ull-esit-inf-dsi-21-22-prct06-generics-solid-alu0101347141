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
  describe('NumericSearchableCollection', () => {
    it('NumericSearchableCollection debe contener la función search', () => {
      expect(coleccionNumeros.search).to.exist;
    });
    it('NumericSearchableCollection debe permitir añadir un número', () => {
      coleccionNumeros.addItem(2);
      expect(coleccionNumeros.getAllItems()).to.deep.equal([2, 3, 3, 4, 3, 2]);
    });
    it('NumericSearchableCollection debe permitir eliminar una cadena', () => {
      coleccionNumeros.removeItem(5);
      expect(coleccionNumeros.getAllItems()).to.deep.equal([2, 3, 3, 4, 3]);
    });
    it('NumericSearchableCollection debe permitir escoger un número', () => {
      expect(coleccionNumeros.getItem(1)).to.be.equal(3);
    });
    it('NumericSearchableCollection implementa correctamente la función search', () => {
      expect(coleccionNumeros.search(3)).to.deep.equal([3, 3, 3]);
    });
    it('NumericSearchableCollection debe permitir saber tamaño de la coleccion', () => {
      expect(coleccionNumeros.getNumberOfItems()).to.be.equal(5);
    });
  });
  describe('StringSearchableCollection', () => {
    it('StringSearchableCollection debe permitir añadir una cadena', () => {
      coleccionCadenas.addItem('ceo');
      expect(coleccionCadenas.getAllItems()).to.deep.equal(['abba', 'cde', 'cdab', 'ef', 'ceo']);
    });
    it('StringSearchableCollection debe permitir eliminar una cadena', () => {
      coleccionCadenas.removeItem(4);
      expect(coleccionCadenas.getAllItems()).to.deep.equal(['abba', 'cde', 'cdab', 'ef']);
    });
    it('StringSearchableCollection debe permitir escoger una cadena', () => {
      expect(coleccionCadenas.getItem(1)).to.be.equal('cde');
    });
    it('StringSearchableCollection debe contener la función search', () => {
      expect(coleccionCadenas.search).to.exist;
    });
    it('StringSearchableCollection debe permitir saber tamaño de la coleccion', () => {
      expect(coleccionCadenas.getNumberOfItems()).to.be.equal(4);
    });
    it('StringSearchableCollection implementa correctamente la función search', () => {
      expect(coleccionCadenas.search('ab')).to.deep.equal(['abba', 'cdab']);
    });
  });
});

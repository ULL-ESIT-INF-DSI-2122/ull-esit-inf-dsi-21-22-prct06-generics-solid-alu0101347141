interface Collectable<T> {
  addItem(item: T): void;
  getItem(i: number): T;
  getAllItems(): T[];
  removeItem(i: number): void;
  getNumberOfItems(): number;
}

interface Searchable<T> {
  search(item: T): T[];
}

/**
 * Clase abstracta para construir una colección de elementos
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  /**
   * Constructor de la clase
   * @param {T[]} item
   */
  constructor(protected item: T[]) {
  }
  /**
   * Función para añadir un elemento a la colección
   * @param {T} item
   */
  addItem(item: T): void {
    this.item.push(item);
  }
  /**
   * Función para recibir el elemento en su respectivo índice
   * @param {number} i
   * @return {T}
   */
  getItem(i: number): T {
    return this.item[i];
  }
  /**
   * Función para recibir la array completa
   * @param {number} i
   * @return {T}
   */
  getAllItems(): T[] {
    return this.item;
  }
  /**
   * Función para eliminar un elemento de la colección
   * @param {number} i
   *
   */
  removeItem(i: number): void {
    this.item.splice(i, 1);
  }
  /**
   * Función para conocer el tamaño de la array
   * @return {number}
   */
  getNumberOfItems(): number {
    return this.item.length;
  }
  abstract search(item: T): T[];
}

/**
 * Clase de colección de números
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * Función para encontrar cuantas veces se repite un número en la colección
   * @param {number} elemento
   * @return {number[]}
   */
  search(elemento: number): number[] {
    const array: number[] = [];
    for (let i: number = 0; i < this.item.length; i++) {
      if (elemento == this.item[i]) {
        array.push(elemento);
      }
    }
    return array;
  }
}

/**
 * Clase de colección de cadenas
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * Función para encontrar cuantas cadenas de la colección contienen una subcadena
   * @param {string} elemento
   * @return {string[]}
   */
  search(elemento: string): string[] {
    const array: string[] = [];
    for (let i: number = 0; i < this.item.length; i++) {
      if (this.item[i].includes(elemento)) {
        array.push(this.item[i]);
      }
    }
    return array;
  }
}


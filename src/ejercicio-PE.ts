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
 *
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  /**
   *
   * @param {T[]} item
   */
  constructor(protected item: T[]) {
  }
  /**
   *
   * @param {T} item
   */
  addItem(item: T): void {
    this.item.push(item);
  }
  /**
   *
   * @param {number} i
   * @return {T}
   */
  getItem(i: number): T {
    return this.item[i];
  }
  /**
   *
   * @param {number} i
   * @return {T}
   */
  getAllItems(): T[] {
    return this.item;
  }
  /**
   *
   * @param {number} i
   *
   */
  removeItem(i: number): void {
    this.item.splice(i, 1);
  }
  /**
   * @return {number}
   */
  getNumberOfItems(): number {
    return this.item.length;
  }

  abstract search(item: T): T[];
}

/**
 *
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   *
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
 *
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   *
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


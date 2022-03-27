import {Pelicula} from './pelicula';
import {Serie} from './serie';
import {Documental} from './documental';

type Contenido = Pelicula | Serie | Documental;

interface Streamable <T extends Contenido> {
  añadir(item: T): void;
  borrar(i: number): void;
  getColeccion(): T[];
  getCantidad(): number;
  searchByFecha(fecha: string): T[];
  searchByNombre(texto: string): T[];
  searchByNota(nota: number): T[];
}
/**
 * Clase abstracta genérica de la que surgirán las distintas formas de representar colecciones de contenido
 */
export abstract class BasicStreamableCollection < T extends Contenido> implements Streamable<T> {
  /**
   *
   * @param {T[]} coleccion
   */
  constructor(private coleccion: T[]) {}
  /**
   * Función para añadir un elemento a la colección
   * @param {T} item
   */
  añadir(item: T): void {
    this.coleccion.push(item);
  }
  /**
   * Función para borrar un elemento de la colección
   * @param {T} i
   */
  borrar(i: number): void {
    this.coleccion.splice(i, 1);
  }
  /**
   * Getter de la colección completa
   * @return {T[]}
   */
  getColeccion(): T[] {
    return this.coleccion;
  }
  /**
   * Getter de la cantidad de contenido
   * @return {number}
   */
  getCantidad(): number {
    return this.coleccion.length;
  }
  /**
   *
   * @param {string} fecha
   * @return {T[]}
   */
  searchByFecha(fecha: string): T[] {
    const resultado: T[] = [];
    this.coleccion.forEach(function(a) {
      if (a.getFecha() == fecha) {
        resultado.push(a);
      }
    });
    return resultado;
  }
  /**
   *
   * @param {string} texto
   * @return {T[]}
   */
  searchByNombre(texto: string): T[] {
    const resultado: T[] = [];
    this.coleccion.forEach(function(a) {
      if (a.getNombre().includes(texto)) {
        resultado.push(a);
      }
    });
    return resultado;
  }
  /**
   *
   * @param {number} nota
   * @return {T[]}
   */
  searchByNota(nota: number): T[] {
    const resultado: T[] = [];
    this.coleccion.forEach(function(a) {
      if (a.getCalificacion() >= nota) {
        resultado.push(a);
      }
    });
    return resultado;
  }
}

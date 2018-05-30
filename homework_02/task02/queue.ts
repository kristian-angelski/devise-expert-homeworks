import {Container} from './interfaces/container';

export class Queue<T> implements Container<T> {
  _store: T[] = [];

  put( el:T ):void {
    this._store.push(el);
  }

	get():T | undefined {
    let firstElement = this._store.shift();
    return firstElement;
  }

	// remove(el:T):T {

  //   return this._store;
  // }
}
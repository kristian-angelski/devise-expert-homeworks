import {Person} from '../task01/person';
import { Container } from './interfaces/container';
import { Queue } from './queue';

let person:Person = new Person('a', 'b', 3);
let queue = new Queue<Person>();

queue.put(person);
queue.put(new Person('b','c', 33));
queue.put(new Person('z','s', 53));
queue.put(new Person('x','y', 43));

console.log(queue);
queue.get();

console.log(queue);
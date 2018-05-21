import {Person} from './person';

let p:Person = new Person('Kristian', 'Angelski', 30);
console.log(p.toString());

p.firstName = 'Marian';
p.lastName = 'Tonchev';
p.age = 24;
console.log(p.toString());

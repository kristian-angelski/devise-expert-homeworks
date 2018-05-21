"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var p = new person_1.Person('Kristian', 'Angelski', 30);
console.log(p.toString());
p.firstName = 'Marian';
p.lastName = 'Tonchev';
p.age = 24;
console.log(p.toString());

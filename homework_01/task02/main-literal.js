'use strict';

// literal object
const product = {
  name: 'laptop',
  quantity: 30,
  price: 2000,
  calculateIncome: function() {
    return this.quantity * this.price;
  },
  printInfo: function() {
    console.log(`${this.name}: quantity: ${this.quantity} and price: ${this.price}; Expected income = ${this.calculateIncome()}`);
  }
}

let p = product;

p.name = 'phone';
p.printInfo();


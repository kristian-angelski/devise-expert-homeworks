'use strict';

function Product() {
  let name = 'laptop';
  let quantity = 30;
  let price = 2000;

  this.printInfo = function () {
    console.log(`Product: ${name}, quantity: ${quantity}, price: ${price}; Expected income = ${calculateIncome(quantity,price)}`);
  };

  function calculateIncome() {
    let income = quantity * price;
    return income;
  }
}

let product = new Product();
product.printInfo();
Array.prototype.findMin = function () {
  //връща минималния елемент в масива
  let min = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }

  return min;
};

Array.prototype.findMax = function () {
  //връща максималният елемент в масива
  let max = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] > max) {
      max = this[i]
    }
  }

  return max;
};

let array = [3, 0.3, 0.1, 4, 5, 2, 1, 0.5];
console.log('The smallest number is ' + array.findMin());
console.log('The biggest number is ' + array.findMax());
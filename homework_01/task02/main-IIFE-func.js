'use strict';

let User = (function () {
  // private vars
  let firstName;
  let lastName;

  //private methods
  function register(fname, lname) {
    firstName = fname;
    lastName = lname;
  }

  function printName() {
    console.log(`${firstName} ${lastName}`);
  }

  //public
  return function (fname, lname) {
    register(fname, lname);

    this.print = printName;
    this.setNames = register;
    this.isRegistered = function () {
      if (firstName !== undefined && lastName !== undefined) {
        return true;
      }

      return false;
    }

  }
})();

let someUser = new User('Speedy', 'Gonzalez');
someUser.print();

someUser.setNames('Marian', 'Vulev');
if (someUser.isRegistered()) {
  someUser.print();
}

let anotherUser = new User('Jeff', 'Bob');
anotherUser.print();

anotherUser.setNames('Another', 'Name');
if (anotherUser.isRegistered()) {
  anotherUser.print();
}
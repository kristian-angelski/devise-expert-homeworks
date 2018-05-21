'use strict';

function User() {
  let __fname;
  let __lname;
  this.show = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

Object.defineProperty( User.prototype, 'firstName', {
  set: function(name) {
    // console.log('set first name');
    this.__fname = name;
  },
  get: function() {
    // console.log('get first name');
    return this.__fname;
  }
});

Object.defineProperty( User.prototype, 'lastName', {
  set: function(name) {
    // console.log('set last name');
    this.__lname = name;
  },
  get: function() {
    // console.log('get last name');
    return this.__lname;
  }
});

let user = new User();
user.firstName = 'Kristian';
user.lastName = 'Angelski';

console.log(`${user.firstName} ${user.lastName}`);
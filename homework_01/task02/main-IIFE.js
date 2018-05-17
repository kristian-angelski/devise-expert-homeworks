'use strict';

let User = (function() {
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
  return {
    setNames: register,
    printInfo: printName,
    isRegistered: function () {
      if ( firstName !== undefined && lastName !== undefined ) {
        return true;
      }

      return false;
    }
  }
})();

User.setNames('Marian', 'Salah');
if ( User.isRegistered() ) {
  User.printInfo();
}

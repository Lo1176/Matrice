'use strict'
// Static methods
class Person {
  constructor(name, isWizard) {
    this._name = name;
    this._isWizard = isWizard;
  }
  static isReal(person) {
    return person._isWizard === false;
  }
}

const harry = new Person("Harry Potter", true);

console.log(Person.isReal(harry)); // $> false
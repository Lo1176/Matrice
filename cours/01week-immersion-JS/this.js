// "use strict";

// https://rbean.matrice.io/projects/immersion-js-d07/sessions/882/sessions_users/11186/guides/context-and-this-183

// const person = {
//   name: "Paul",
//   surname: "Dupont",
// };

// const neighbour = {
//   name: "Georges",
//   surname: "Bulot",
// };

// function sayHello() {
//   console.log(`Hello, my name is ${this.name} ${this.surname}`);
// }

// sayHello(); // $> Cannot read property 'name' of undefined

// person.sayHello = sayHello;
// neighbour.sayHello = sayHello;

// person.sayHello(); // $> Hello, my name is Paul Dupont
// neighbour.sayHello(); // $> Hello, my name is Georges Bulot


// const neighbour = {
//   name: "Paul",
//   surname: "Dupont",
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} ${this.surname}`);
//   },
// };

// setTimeout(neighbour.sayHello, 1000);

// //3. untilisation de bind. Sert à pointer vers l'objet concerné

// function sayHello(age, city) {
//   console.log(
//     `Hello, my name is ${this.name}, I am ${age} and I live in ${city}.`
//   );
// }

// const neighbour = {
//   name: "Paul"
// };

// // const sayHelloFromNeighbour = sayHello.bind(neighbour, 25);
// const sayHelloFromNeighbour = sayHello.bind(neighbour, 25, "Paris"); // on force la ville à Paris peu importe qu'on lui passe un parametre ou pas.
// sayHelloFromNeighbour(); // $> Hello, my name is Paul, I am 25 and I live in Paris.

// sayHelloFromNeighbour("London"); // $> Hello, my name is Paul, I am 25 and I live in London.


// // 4. Arrow function

// const sayHello = () => console.log("Hello");
// sayHello();   // $> Hello

// (() => console.log("Hello again!"))();   // $> Hello again!

// const introduce = (name, surname) => console.log(`${name} ${surname}`);
// introduce("Will", "Smith");   // $> Will Smith

// const concat = (name, surname) => name + " " + surname;   // the "return" keyword is implicit
// let full_name = concat("Donald", "Duck");
// console.log(full_name);    // $> Donald Duck

// When it comes to context, when arrow functions are executed, the value of this isn't evaluated, so this remains the outer context of the function.
// Let's walk through an example. This:

const person = {
  name: "Paul",
  surname: "Dupont",
};

const neighbour = {
  name: "Georges",
  surname: "Bulot",
};

// // 5. call ???
function sayGreetings() {
  function sayName() {
    // function
    console.log(`Hello, my name is (function) ${this.name}`); // le contexte reste celui de person
  }

  const sayNameWithArrowFunction = () => {
    // arrow function
    console.log(`Hello, my name is (arrow function) ${this.name}`); // le contexte change à neighbour
  };

  sayName.call(person);
  sayNameWithArrowFunction.call(person); // le contexte n'est pas réévalué lors de l'execution de la fonction.
}

sayGreetings.call(neighbour); // le .call force la fonction fléchée à ne pas avoir this = undefined

const myObj = {
    obj1: {
        myFunc1: function() { console.log(this)}},
    obj2:  {
        myFunc2: () => { console.log(this)}},
}

myObj.obj1.myFunc1();
myObj.obj2.myFunc2();
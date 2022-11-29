"use strict";

// https://rbean.matrice.io/projects/immersion-js-d07/sessions/882/sessions_users/11186/guides/context-and-this-183


//on parle aujourd'hui plus de binding que de contexte. 
// console.log(this) // retourne un objet vide // pointe vers l'objet global ou l'objet window

//la value du this est définie lors de l'exécution du code car dépend de l'objet auquel il est rattaché (cf.exemple ci dessous)


// //1.EXEMPLE 1 
// const person = {
//   name: "Paul",
//   surname: "Dupont"
// };

// const neighbour = {
//   name: "Georges",
//   surname: "Bulot"
// };

// function sayHello() {
//   console.log(`Hello, my name is ${this.name} ${this.surname}`);
// }

// sayHello(); // $> Cannot read property 'name' of undefined // le this ne pointe vers rien (en mode strict on voit l'erreur)

// person.sayHello = sayHello; //on rajoute la fonction à l'objet person
// neighbour.sayHello = sayHello; // on rajoute la fonction à l'objet neighbour

// person.sayHello();    // $> Hello, my name is Paul Dupont
// neighbour.sayHello(); // $> Hello, my name is Georges Bulot


// EXEMPLE 2 : une fonction est toujours rattachée à un objet mais bien noté que les méthodes n'appartiennent pas à des objets. 
const paul = {
    name: "Paul",
    surname: "Dupont",
    sayHello : function() {
      console.log(`Hello, my name is ${this.name} ${this.surname}`);
    }
  };

// const charlotte = {
//     name : "Charlotte",
//     surname : "Durant",
//     sayHello : paul.sayHello
// }

// paul.sayHello()
// charlotte.sayHello() // sayHello n'appartient pas à neibourg, le fait qu'elle soit déclaré dans l'objet paul n'a pas d'importance



// PROBLEME quand on va utiliser des méthodes en argument d'autres fonctions.
// setTimeout(paul.sayHello, 1000); // tout ce qui est en dehors de setTimeout n'existe pas // à l'intérieur de setTimeout neighbour n'existe plus // neighbour n'existe pas dans le contexte de la fonction setTimeout
// setTimeout(paul.sayHello.bind(paul), 4000)


//3.bind // sert à pointer vers l'objet concerné

function sayHello(age, city) {
    console.log(
      `Hello, my name is ${this.name}, I am ${age} and I live in ${city}.`
    );
  }
  
  const neighbour = {
    name: "Paul"
  };

  const woman = {
    name: "Catherine",
    age: 16
  }
  
  // const sayHelloFromNeighbour = sayHello(12,"Bordeaux");// le this ne se rapporte à rien, on obtient undefined. 
  // Cannot read property 'name' of undefined pour this
  /**  avec .bind **/
  // const sayHelloFromNeighbour = sayHello.bind(neighbour, 12, "Bordeaux");
  const sayHelloFromNeighbour = sayHello.bind(neighbour); // on force la ville à "Marseille" peu importe qu'on lui passe un parametre ou pas.
  sayHelloFromNeighbour(woman, 26,'London'); // $> Hello, my name is Paul, I am 25 and I live in London.

//fonctions fléchée 
//Cf.fonctions fléchées


// https://delicious-insights.com/fr/articles/js-binding-this/


// const bob = {
//     firstName: 'Bob',
//     greet(people) {
//       const that = this // on sort le this de forEach
//       people.forEach(function (whom) {
//         console.log(`Salut ${whom} moi c’est ${that.firstName}`)
//       })
//     },
//   }

//   bob.greet(["Tom"])
  
  // Approche 2 : le bulldozer de bind (ça revient à peu près au même
  // que l'approche 1, conceptuellement).
//   const bob = {
//     firstName: 'Bob',
//     greet(people) {
//       people.forEach(
//         function (whom) {
//           console.log(`Salut ${whom} moi c’est ${this.firstName}`)
//         }.bind(this)
//       )
//     },
//   }


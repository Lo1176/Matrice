'use strict'
// const person = {
//     name: "Paul",
//     surname: "Dupont"
//   };
  
//   const neighbour = {
//     name: "Georges",
//     surname: "Bulot"
//   };
  
//   function sayGreetings() {
 
//     function sayName() {
//       // //call
//       // this.name = "Paul";
//       // this.surname = "Dupont"

//       // function
//       console.log('fonction simple',`Hello, my name is ${this.name}`); // le contexte reste celui de person
//     }
  
//     const sayNameWithArrowFunction = () => {
//       // arrow function
//       console.log('fonction fléchée',`Hello, my name is ${this.name}`); // le contexte change à neigbour 
//     };
  
//     sayName.call(person); //
//     sayNameWithArrowFunction.call(person); // le contexte n'est pas réévalué lors de l'execution de la fonction. Il reste le même que lorsque la fonction est exécutée. 
//   }
  
  
//   sayGreetings.call(neighbour); // force le contexte à neighbour



const myObj = {
  obj1 : {
    myFunc1 : function(){ console.log(this)}},
  obj2 : {
    myFunc2 : ()=>{console.log(this)}}
    
}

myObj.obj1.myFunc1()
myObj.obj2.myFunc2()


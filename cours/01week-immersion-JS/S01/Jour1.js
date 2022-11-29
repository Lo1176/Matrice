//Mercredi
// 1. quelles sont les différentes manières de déclarer une variable ? 
// var a = 1 ;
// const b = 1 ; 
// let c = 1 ; 

// 2. quelles sont les différences entre var, const et let ? 

// let permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. Le mot-clé var , quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).
//exemple issus de la doc JS
//cf.liens mozilla
  
//   function varTest() {
//     var x = 1;
//     if (true) {
//       var x = 2;  // c'est la même variable !
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   function letTest() {
//     let x = 1;
//     if (true) {
//       let x = 2;  // c'est une variable différente
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

  
// varTest()
// letTest()

//3. Ecrivez moi les différents types de données 
//les valeurs primitives 
// let a = 'Claire' //string
// let b = 32 // Number 
// let c = true // Boolean 
// let d = null // Null (je sais que je ne sais pas)
// let e = undefined // Undefined (je ne sais pas que je ne sais pas) - quels sont les 4 cas où on a undefined ?
// let f = BigInt() ou 12n
// let g = Symbol()

//les objets (les tableaux et les fonctions sont des objects)

//4. Ecrivez moi une déclaration de fonction, une expression de fonction et une fonction fléchée 
// Déclaration ou instruction de fonction
// function MyFunc(param){
//     return param * 2 
// }

// // Expression de fonction 
// const MyFunc = function(param){
//     return param * 2 
// }

//Fonctions fléchées
// https://delicious-insights.com/fr/articles/js-fonctions-flechees/
// (param) => { return param * 2}

//5. la syntaxe de la boucle for 
// for (let i = 0; i < 10 ; i++) {
//     <code>
// }
// for (i in obj) {
// <code>
// }

//5.2 la condition if 
// if(true) {
//     <code>
// } else {
//     <code>
// }

//6. Quelques méthodes natives pour les tableaux JS 
// let myArray = []
// let myArray = ['pomme', 'poire', 'banane']
// console.log(myArray.length)
// myArray[0]
// //je veux ajouter fraise en dernier 
// myArray.push('fraise')
// console.log(myArray)
// //je veux ajouter framboise en premier 
// myArray.unshift('framboise')
// console.log(myArray)
// //je veux revenir au tableau initial 
// myArray.pop()
// myArray.shift()
// console.log(myArray)
// //je veux remplacer poire par abricot 
// myArray.splice(1,1,'abricot')
// console.log(myArray)
// //je veux les deux derniers éléments du tableau (sans supprimer)
// console.log(myArray.slice(1,3))
// // je veux sommer tous les éléments d'un tableau
// console.log(myArray.reduce((acc,vc) => acc + vc))

//les operateurs logiques (si je fais, qu'est ce que cela me donne ?)
// console.log(true && true)
// console.log(true && false && true)
// console.log(true || false)
// console.log(false || false || true)
// console.log(true || false && true)
// console.log(false && false || true)
// console.log(false && (false || true))

//l'opérateur différent 
// console.log(!true)

//relire la documentation JS puis faire les exos Rbean (en faisant des tests à chaque fois)
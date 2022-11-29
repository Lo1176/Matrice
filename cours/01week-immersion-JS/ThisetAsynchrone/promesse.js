// const getmyData = new Promise((resolve,reject) => {
//     //...
//     const result = null

//     if(result){
//         resolve()
//     } else {
//         reject()
//     }
// })

//Utilisation 
// getmyData
// .then(() => console.log("c'est good")) // récupère ce qu'il y a dans le resolve
// .catch(() => console.log("c'est pas good")) // récupère ce qu'il y a dans le reject
 
// let result = 120 * 30
// let result = null 
// // let result = undefined
// console.log(Boolean(result))

const calcul = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const result = num1 * num2;
    if (result < 1000) {
      resolve(result);
    } else {
      reject("resultat trop petit");
    }
  });
};

calcul(300, 2)
  .then((result) => {
    console.log("Resultat: " + result);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });


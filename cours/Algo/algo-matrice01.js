'use strict'
/**
 * 
 * Prombleme:
 * Given a natural number n, determine if the number is prime or not
 * A prime number is a natural number greater than 1 that is not a product
 * of two smaller natural numbers.
 * isPrime(5) => true (15 or 51)
 * isPrime(4) => false (14 or 22 or 4*1)
 */
function isPrime(n){
    // si la valeur est stricement inférieur à 2 return false
    if(n < 2){
        return false
    }

    // boucler pour itérer sur n avec tous les nombres < n
    // si le reste est égal à 0 alors ce n'est pas un nombre premier
    for (let index = 2; index < n; index++) {
        if(n % index === 0 ){
            return false
        }
    }
    // si aucune des valeurs si dessus son vrai alors return true = 'n' est un nombre premier
    return true
}

console.log(isPrime(1)) // False
console.log(isPrime(5)) //true
console.log(isPrime(4)) //False
console.log(isPrime(33)) //False
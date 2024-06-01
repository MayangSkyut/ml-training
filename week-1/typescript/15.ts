/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

function evenOddnum (n: number){
    for (let number = 1; number < n ; number++ ){
         if (number % 2 === 0 ){
          console.log(`${number} is even number.`)
         }
         else {
          console.log(`${number} is odd number.`)
         }
  
      }      
  }
  
evenOddnum(20);

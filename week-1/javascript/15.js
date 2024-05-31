/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

/// maghatag kog number then starting from 1 mag iterate og number hangtud sa ma stop and iteration sa number na akong gihatag.Dayun mo chech
/// nga akong gihatag if even ba or odd.


function EvenOddnum (n){
  for (let number = 1; number < n ; number++ ){
       if (number % 2 === 0 ){
        console.log(`${number} is even number.`)
       }
       else {
        console.log(`${number} is odd number.`)
       }

    }      
}

   EvenOddnum(20);     








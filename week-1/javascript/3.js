/**
 * Write a function that prints the numbers from 1 to a given number.
 * But for multiples of three print 'Fizz' instead of the number and for the
 * multiples of five print 'Buzz'.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @param {number} n The number to print.
 */

function number(n){
    for (let i = 0; i <= n; i++){
        if (i %3 === 0 && i %5 === 0){
            console.log("FizzBuzz")
        }
        else if(i %5 === 0){
            console.log("Buzz")
        }
        else if  (i %3 === 0){
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}
number(15);
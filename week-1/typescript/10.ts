/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function nums(num1: number, num2: number){
    if ( num1 >= 0 && num2 === 0){
        throw new Error("Error! the second number must not be 0")
    }
    else{
      return  (num1 + " " + num2)
    }
}

try {
    let numbers =nums(1, 9)
    console.log(numbers)
}
catch (error){
    console.log((error as Error).message)
}

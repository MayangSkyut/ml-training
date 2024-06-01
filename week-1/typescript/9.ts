/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function Positive(num: number){
    if (num < 0){
      throw new Error ("This is an erorr:the number must be a positive integer")
    }
   else {
      return num;
   }
}
try {
  let number = Positive(-9)
  console.log(number);
}
catch(error){
  console.log((error as Error).message)
  
}
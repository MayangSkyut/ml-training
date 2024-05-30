/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function calculate(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sum = calculate(numbers);
  console.log(sum);
/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */


function Calculate(arr: number[]): number {
    let total : number = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  const numberni = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sum1 = Calculate(numberni);
  console.log(sum1); 
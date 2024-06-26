/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
 

function Numbers(arr : number[]): string {
    if (arr.length ===0){
        throw new Error ("Empty Array")
    }
        const highestNumber = Math.max(...arr);
        const lowestNumber = Math.min(...arr);
    return(`The lowest number is ${lowestNumber} and the highest number is ${highestNumber}`)
}
try{
    let numberarray = Numbers([ 5,46,45,7,8])
    console.log(numberarray)
}
catch(err){
    console.log((err as Error).message)
}

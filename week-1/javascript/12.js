/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function array (arr){
    if (arr.length === 0){
        throw new Error ("Error! The array is empty")
    }
    else{
        return (arr)
    }
}
try{
    let numberarr = array([1,2,3,4,5])
    console.log(numberarr)
}
catch(err){
    console.log(err.message)
}
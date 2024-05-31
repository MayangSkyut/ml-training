/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} _arr1
 * @param {number[]} _arr2
 * @returns {number[]}
 */

function MergeArray(_arr1,_arr2){
    let result = [...new Set(_arr1.concat(_arr2))];
    return result;

}
let _arr1 =[1,2,3,4,6,7,8,9]
let _arr2 =[1,2,3,5,6]

let array = MergeArray(_arr1, _arr2);
 console.log(array);
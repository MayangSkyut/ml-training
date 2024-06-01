/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function Case(str: string): string{
    let result = ''
    for (let b = 0; b < str.length ; b++) {

       if (str[b] === str[b].toUpperCase()){
            result += str[b].toLowerCase();
       } else{
            result += str[b].toUpperCase();  
       }
    }
    return result;
      }
      

console.log(Case('Marian Adonay!') );
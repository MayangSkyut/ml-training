/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */


function Vowels (str){
    const vowels = ["a", "e","i","o", "u" ];
    let value = '';

    for (let i of str.toLowerCase()){
        if(vowels.includes(i)){
            value += i
        }
    }
    return value;

}


console.log(Vowels("Maglisod ko"));
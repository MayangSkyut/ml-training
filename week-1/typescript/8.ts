/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */



function vowels (str: string): string{
    const vowels : string [] = ["a", "e","i","o", "u" ];
    let value : string  = '';

    for (let i of str.toLowerCase()){
        if(vowels.includes(i)){
            value += i
        }
    }
    return value;

}

console.log(vowels("Hi!this is Marian Adonay"));
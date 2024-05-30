/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */


function Temperature(n){
    return ((n * 9 / 5) + 32);
}

const n = 60;
console.log(Temperature(n))
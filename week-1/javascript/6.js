/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function Temperature(n){
    return ((n -32 ) * 5/9 );
}
const n = 140;

console.log(Temperature(n))
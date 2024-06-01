/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */


function temperature(celsius: number): number{
    return ((celsius * 9 / 5) + 32);
}

const num = 60;
console.log(temperature(num))
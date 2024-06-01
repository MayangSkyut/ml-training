/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */


function TemperatureFahrenheit(fahrenheit: number): number{
    return ((fahrenheit -32 ) * 5/9 );
}

const temp = 140;
console.log(TemperatureFahrenheit(temp))
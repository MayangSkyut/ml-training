/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function integer(num: number | string): number | string {
    if (typeof num === 'string') {
        throw new Error ('The provided value is not an integer.')
    } return num
}

try {
    const result = integer('5');
    console.log(result);
} catch (error) {
    console.error((error as Error).message);
}
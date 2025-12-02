// Create a function that accepts two inputs and throws a TypeError if either is not a number.
function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both inputs must be numbers');
    }
}
validateNumbers(5, 6)
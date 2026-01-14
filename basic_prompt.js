function addNumbers(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a == null || b == null) {
        throw new Error('Invalid input: both arguments must be numbers and cannot be null or undefined.');
    }
    return a + b;
}
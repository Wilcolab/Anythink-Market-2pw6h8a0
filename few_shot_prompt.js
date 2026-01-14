function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber


function convertToCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (input.trim() === '') {
        return '';
    }

    return input
        .replace(/[^a-zA-Z0-9\s-_]/g, '') // Remove special characters
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Additional test cases
console.log(convertToCamelCase('Hello world!')); // helloWorld
console.log(convertToCamelCase(''));             // ''
console.log(convertToCamelCase('123 numbers'));   // numbers
console.log(convertToCamelCase('mixedCASE-TEST')); // mixedCaseTest



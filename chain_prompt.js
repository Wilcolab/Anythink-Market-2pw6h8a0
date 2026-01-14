// Function to convert a string to kebab-case
const toKebabCase = (input) => {
    // Step 3: Input validation
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        return '';
    }

    // Step 2: Handle special characters and spaces
    return input
        .toLowerCase() // Convert to lowercase
        .trim() // Trim leading and trailing spaces
        .replace(/[\W_]+/g, '-') // Remove punctuation and special characters, replace with hyphen
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
};

// Step 3: Usage examples
console.log(toKebabCase("Hello World!")); // "hello-world"
console.log(toKebabCase("  JavaScript is Awesome!  ")); // "javascript-is-awesome"
console.log(toKebabCase("123 Main St.")); // "123-main-st"
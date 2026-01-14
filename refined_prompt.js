/**
 * Converts a string to camelCase format.
 * 
 * The function transforms the input string into camelCase format by:
 * - Making the first word lowercase.
 * - Capitalizing the first letter of each subsequent word.
 * - Removing special characters and punctuation.
 * - Preserving alphanumeric characters.
 * 
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is not a string or is null/undefined.
 * 
 * @example
 * // returns "helloWorld"
 * convertToCamelCase("Hello world!");
 * 
 * @example
 * // returns "javaScriptIsAwesome123"
 * convertToCamelCase(" JAVA_script is-awesome123 ");
 * 
 * @example
 * // returns ""
 * convertToCamelCase("");
 */

/**
 * Converts a string to dot.case format.
 * 
 * The function transforms the input string into dot.case format by:
 * - Making all words lowercase.
 * - Separating words with dots.
 * - Removing special characters and punctuation.
 * - Preserving alphanumeric characters.
 * 
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is not a string or is null/undefined.
 * 
 * @example
 * // returns "hello.world"
 * convertToDotCase("Hello world!");
 * 
 * @example
 * // returns "java.script.is.awesome123"
 * convertToDotCase(" JAVA_script is-awesome123 ");
 * 
 * @example
 * // returns ""
 * convertToDotCase("");
 */

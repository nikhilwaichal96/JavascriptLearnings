/**
 * Nullish coalescing operator  (??).
 * Accepts two values and returns the second value if the first one is null or undefined otherwise returns left-hand side value
 * used when you want to provide a default value for a variable that might be null or undefined
 * The nullish coalescing operator is useful when you want to provide default values for variables that might be null or undefined, without replacing other falsy values like empty strings or 0.
 * It's a more precise way to provide default values than the logical OR operator.
 */

const fname = null ?? 'John';
console.log(fname); // 'John'

const age = undefined ?? 28;

console.log(age); 


let a;

const props =  a??true;
console.log(props)
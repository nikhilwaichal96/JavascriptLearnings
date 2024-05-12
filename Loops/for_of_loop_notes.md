# For of loop in javascript

- The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets

## When to use for...of loop:
- Iterating Over Arrays: It's especially useful when you want to iterate over the values of an array.
- Iterating Over Strings: It can also be used to iterate over characters in a string.
- Iterating Over Other Iterables: It works with other iterable objects like maps, sets, and arrays-like objects.
- 
## When not to use for of loop
 
 - Iterating Over Plain Objects: for...of is not suitable for iterating over plain objects (objects that are not iterable). For plain objects, you should use for...in loop or other methods like Object.keys(), Object.values(), or Object.entries().
- When You Need Index: If you need the index of each element during iteration, for...of may not be the best choice. In such cases, you should use traditional for loops.
- Performance: In some cases, especially when dealing with large arrays, traditional for loops might offer better performance than for...of loops due to the additional overhead of iterating over iterable objects.

```Javascript
//Iterating array using for of loop
const arr = [1, 2, 3, 4, 5];
console.log("Iterating array using for of loop")
for (let element of arr) {
    console.log(element);
}

//Iterating string using for of loop
console.log("Iterating string using for of loop")
const str = "Hello World!";
for (let char of str) {
    console.log(char);
}

//We cannot iterate object it throws person is not iterable
let person = {
    name: "John",
}
// for(key of person){
//     console.log(key);
// }

//Iterating maps
const myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

console.log("Iterating maps")
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Output:
// apple
// banana
// orange


//Iterating sets
console.log("Iterating Sets")
const mySet = new Set(['apple', 'banana', 'orange']);
for (let fruit of mySet) {
    console.log(fruit);
}

// Output:
// apple
// banana
// orange

//Iterating array like object
function sum() {
    let total = 0;
    for (let arg of arguments) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6
```
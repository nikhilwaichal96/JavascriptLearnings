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
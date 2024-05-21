//Map creation
// 1. create a new Map object using an array of key-value pairs

// Do map allow null key?   how many null key can be added in map?  1

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);


// 2. create a new Map object using the set() method
const student = new Map();
student.set("Nikhil", 1);
student.set("Nishi", 2);
student.set("Nitin", 3);

student.set("Nikhil", 10); //will update value of Nikhil to 10
student.set(null, 3);
student.set(null, 4); // 1 null key can be added in map and it will be updated with new value

console.log(student)

//Map methods
// Getting elements from Map
// 1. get(element) method to get the value of a key
console.log(student.get("Nikhil")); // 1

// 2. set(element,value) method to add new key-value pair
student.set("Nikhil", 10);

// 3. size() method to get the size of the Map
console.log(student.size); // 4

//4. delete(element) method to delete a key-value pair
student.delete("Nitin");

//5. has(element) method to check if a key exists in the Map
console.log(student.has("Nikhil")); // true

//6. clear() method to remove all key-value pairs
// student.clear();

//7. keys() method to get all keys
console.log("Student keys ", student.keys()); //returns an iterator object with keys [Map Iterator] { 'Nikhil', 'Nishi', null }
for (const key of student.keys()) {
    console.log("Key is", key);
}

//8. values() method to get all values
console.log("Student values ", student.values()); //returns an iterator object with values [Map Iterator] { 10, 2, 4 }
for (const value of student.values()) {
    console.log("value is", value);
}
//9. entries() method to get all key-value pairs
console.log("Student entries ", student.entries()); //returns an iterator object with key-value pairs [Map Entries] { [ 'Nikhil', 10 ], [ 'Nishi', 2 ], [ null, 4 ] }
for (const [key, value] of student.entries()) {
    console.log("Key is ", key, "Value is ", value);
}


//10. forEach() method to iterate over the Map
student.forEach((value, key) => {
    console.log(key, value);
});

// groupby using map
const people = [
    { name: "John", age: 20, salary: 200 },
    { name: "Jane", age: 30, salary: 300 },
    { name: "John", age: 40, salary: 400 },
];

const peopleMap = new Map(people);

function myCallback({ salary }) {
    return salary > 300 ? "ok" : "low";
}

const result = Map.groupBy(peopleMap, myCallback);

console.log(result);
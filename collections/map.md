# Map

- Map is collection in Javascript to store data in keyvalue pairs

- Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

- A Map remembers the original insertion order of the keys.

- Doest not allow duplicate key

- 1 null key can be added in map and it will be updated with new value

- In javascript Map is Object and typeof returns object

- Being able to use objects as keys is an important Map feature. 
   fruits.get("apples"); //return undefined
   fruits.get(apples);// will return value of apples object


## How to create map in JS

We can create map using
- Passing an Array to new Map()
- Create a Map and use Map.set()


## Map methods:

### 1. get(element) method to get the value of a key
### 2. set(element,value) method to add new key-value pair
### 3. size() method to get the size of the Map
### 4. delete(element) method to delete a key-value pair
### 5. has(element) method to check if a key exists in the Map
### 6. clear() method to remove all key-value pairs
### 7. keys() method to get all keys
### 8. values() method to get all values
### 9. entries() method to get all key-value pairs

``` javascript
//Map creation
// 1. create a new Map object using an array of key-value pairs
// Do map allow null key? yes  how many null key can be added in map?  1

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

//8. values() method to get all values
console.log("Student values ", student.values()); //returns an iterator object with values [Map Iterator] { 10, 2, 4 }

//9. entries() method to get all key-value pairs
console.log("Student entries ", student.entries()); //returns an iterator object with key-value pairs [Map Entries] { [ 'Nikhil', 10 ], [ 'Nishi', 2 ], [ null, 4 ] }

```


### Comparison between Object and Map

| Feature                      | Object                        | Map                            |
|------------------------------|-------------------------------|--------------------------------|
| Iterable                     | Not directly iterable         | Directly iterable              |
| Size Property                | Do not have a size property   | Have a size property           |
| Key Datatype                 | Keys must be Strings (or Symbols) | Keys can be any datatype   |
| Key Order                    | Keys are not well ordered     | Keys are ordered by insertion  |
| Default Keys                 | Have default keys             | Do not have default keys       |

JavaScript object inherits properties and methods from its prototype chain. For plain objects, this chain includes Object.prototype, which provides a number of default properties and methods. like toString(),valueOf etc.

Maps do not inherit from Object.prototype and thus do not have these default properties. They only contain the keys and values explicitly added to them.

### Group by 
- The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

- The Map.groupBy() method does not change the original object.
```javascript
const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupBy(fruits, myCallback); //Map(2) {'ok' => Array(2), 'low' => Array(2)}

for (let fruit of result.get("ok")) {
    console.log(fruit.name,fruit.quantity) //apples 300 bananas 500
}
for (let fruit of result.get("low")) {
    console.log(fruit.name,fruit.quantity) //oranges 200 kiwi 150
}

```
# Array methods
### Get Array length  : ArrayName.length


## 1. Add / Remove elements in array

### 1. Push: Add element at the end of Array
**push**: Adds one or more elements to the end of an array and returns the new length of the array.
 ```javascript
    let array = [1, 2, 3];
    array.push(4); //Add element 4 in end of array and return length of array 4.
    array.push(5,6,7,8) //add 5,6,7,8 retruns 8
```

### 2. pop:  Removes element from end of Array
**pop**: Removes the last element from an array and returns that element.
```javascript
    let array = [1, 2, 3];
    let poppedElement = array.pop();
    // array is now [1, 2], poppedElement is 3
```
### 3. unshift: Add element/s at the beginning of Array
**unshift**: Adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
      let array = [2, 3];
      array.unshift(1);// array is now [1, 2, 3] & length 3
      array.unshift(8,9,2,8) //[8, 9, 2, 8, 1, 2, 3] & length 7
```

### 4. shift: Removes 1st element from begining of array
**shift**: Removes the first element from an array and returns that element.
 ```javascript
      let array = [1, 2, 3];
      let shiftedElement = array.shift();
      // array is now [2, 3], shiftedElement is 1
```

### 5. Array slice (Return new Array subset)
 **slice**: Returns a shallow copy of a portion of an array into a new array object selected from start to end.
 - syntax slice(start, stop); both parameters are optional
 - If start is undefined it will start slicing from 0
 - The stop parameter, as its name implies, is a zero-based index at which to end extraction. The slice() method extracts up to **stop-1**. It means that the slice() method doesn’t include the element at the stop position in the new array. If you omit the stop parameter, the slice() method will use the **length of the array** for the stop parameter.
```javascript
      let array = [1, 2, 3, 4, 5];
      let newArray = array.slice(1, 4);// newArray is [2, 3, 4]
      let newArray2 = array.slice(1);// newArray2 is [2, 3, 4, 5]
      let newArray3 = array.slice(2, 5);// newArray3 is [3, 4, 5]
```
### 6. Array splice (Delete/Inset/Rename)
Used for insert/rename/delete element from array by refering position
#### 1. Remove element
To  delete elements in an array, you pass two arguments into the splice() method as follows:
Array.splice(position,num);
The position specifies the position of the first item to delete and the num argument determines the number of elements to delete.
```javascript
Array.splice(positionOfFirstItemTodelete,numbersOfElementToDelete);
let scores = [1, 2, 3, 4, 5];
scores.splice(1,3)  //retrun [1,5]
```
#### 2. Insert element
You can insert one or more elements into an array by passing **three or more arguments** to the splice() method with the second argument is **zero.**
```javascript
//Array.splice(positionFromInsert,0,...number of elements you want to insert);
scores.splice(2,0,100,300,400) //will insert element from index 2  with value 100,300,400 [1,2,100,300,400,3,4,5]
```
#### 3. rename element
The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.

To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.

Note that the number of elements to delete needs not be the same as the number of elements to insert.
```javascript
scores.splice(2,1,100,300,400) //will replace 3 with 100,300,400 result: [1,2,100,300,400,4,5]
scores.splice(2,3,100,300,400) //will delete 3,4,5 and add 100,300,400 result [1,2,100,300,400]
```

## 2. Find elements in Array
### 1. IndexOf (get index of first occurence of element in array)
To find the position of an element in an array, you use the indexOf() method. This method returns the index of the **first occurrence** the element that you want to find, or **-1** if the element is not found.
The lastIndexOf() method returns the index of the last occurrence of the searchElement in the array. It returns -1 if it cannot find the element.
```javascript
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
console.log(scores.lastIndexOf(10));// 3
console.log(scores.lastIndexOf(20));// 5
```
### 2. (Includes method checks if array contains element or not)
The includes() method returns true if an array contains a given element; Otherwise, it returns false.
The includes() accepts two arguments:
- The first argument is the element that can be searched.
- The **fromIndex** is the position in the array to which the search starts.
```javascript
[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false
```
### 3. find method (locates first element in array that matches condition)
JavaScript is used to **locate the first element** in an array that **satisfies a provided testing function**. If no elements satisfy the testing function, find returns **undefined**.
syntax:array.find(callback(element, index, array), thisArg)
1. callback: A function to execute on each element in the array. It takes three arguments:
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed in the array.
- array (optional): The array find was called upon.
2. thisArg (optional): An object to use as this when executing the callback function.

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(e => e % 2 == 0));
```
### 4. findIndex method (locates index of first element in array that matches condition)
findIndex() to the Array.prototype, which allows you to find the first element in an array that satisfies a provided testing function.
The findIndex() method returns the index of the element that satisfies a testing function or -1 if no element passed the test.
```javascript
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
```

## 3. Concat or Merge Arrays
- To merge two or more arrays, you use the concat() method of an Array object.
- The concat() method allows you to merge more than two arrays
- When you don’t pass any argument into the concat() method, it simply clones the array and returns it:
- If you pass values that are not arrays, into the concat() method, the method will append each value to the end of the result array

```javascript 
let odds = [1,3,5];
let evens = [2,4,6];
let chars = ['a','b','c']
let combined = odds.concat(evens);
let combined2 = [].concat(odds, evens,chars);
let colors = ['red','green','blue'];
let rgb = colors.concat(); // clones color 
let moreColors = rgb.concat('yellow','magento'); //Adds yellow and magento to morecolors array
let combined = [...odds, ...evens];//Spread operator to combine array
```



## 6. Higher order functions
map() – transform array elements.
filter() – filter elements in an array.
reduce() – reduce elements of an array to a value.
every() – check if every element in an array passes a test.
some() – check if at least one element in an array passed a test.
sort() – sort elements in an array.
forEach() – loop through array elements.

### Map 

 **What it does:** 
 The map method is used to iterate over an array and transform each element into a new element based on a provided function.

**Why it's used:** It's used to transform data in arrays without mutating the original array.

- **How to use:**
    ``` javascript
      const numbers = [1, 2, 3, 4, 5];
      const doubledNumbers = numbers.map(num => num * 2);
      console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    ```
**When to use:** Use map when you need to transform each element of an array and create a new array with the transformed values.

### Reduce
**What it does:** The reduce method is used to iterate over an array and accumulate a single value based on the elements of the array.

**Why it's used:** It's used to perform calculations or aggregations on an array, resulting in a single output value.
- **How to use:**
 ``` javascript
      const numbers = [1, 2, 3, 4, 5];
      const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
 ```     
**When to use:** Use reduce when you need to compute a single value from the elements of an array, such as finding the sum, average, maximum, or minimum value.


### filter
**What it does:** The filter method is used to iterate over an array and return a new array containing only the elements that satisfy a provided condition.

**Why it's used:** It's used to selectively extract elements from an array based on a condition.

- **How to use:**
 ``` javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
**When to use:** Use filter when you need to extract elements from an array that meet a specific condition.


### every 
- Array type provides a method every() that tests every element in an array and returns true/false based on result.
- arrayObject.every(callback[, thisArg])
- callback accepts 3 args function callback(currentElement, index, array)
- The every() method returns true if the callback function returns a truthy value for every array element; otherwise, it returns false.
- Note that the every() method executes the callback() function on every element in the array until it finds the one that causes the callback() return a falsy value.
- In other words, the every() will stop calling the callback() function and return false once there is an array element that causes callback() to return a falsy value
- If you call the every() method on an empty array, the method will always return true for any condition. 

```javascript
let numbers = [1, 3, 5];

let isEven = numbers.every(function (e) {
    return e % 2 == 0;
});
let result = numbers.every( e  => e > 0);
```


### some
- Sometimes, you want to check if an array has **at least one element** that meets a specified condition.
- Syntax: arrayObject.some(callback[, thisArg])
- callback accepts 3 args function callback(currentElement, index, array)

```javascript
let marks = [4, 5, 7, 9, 10, 2];
const greaterThanFive = marks.some(function(e) {
    return e > 5;
});

let lessThanFive = marks.some(e => e < 5);
const range = {
    min: 8,
    max: 10
};

//range object passed as this refrence
let result = marks.some(function (e) {
    return e >= this.min && e <= this.max;
}, range);
```

## 7.sort 
- The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array
- By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.
- The sort() method casts elements to strings and compares the strings to determine the orders. which result in unexpected results for numbers
- Syntax: array.sort(comparefunction)
   * If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
   * If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
   * If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

```javascript
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort(); //[ 0, 1, 10, 2, 20, 3, 30 ] unexpected result
//acending sorting
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
//decending sorting
numbers.sort( function( a , b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
//simplest way to sort no
numbers.sort((a, b) => a - b); //accending sorting
numbers.sort((a, b) => b - a); //decending sorting

//Strings Sorting
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort(); // ['ant', 'bee', 'cat', 'dog', 'elephant'] //acending
//decending sorting
animals.sort( function( a , b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
//aceding
animals.sort(function (a, b) {
    return a.localeCompare(b);
});
//decending
animals.sort(function (a, b) {
    return b.localeCompare(a);
});

//Sorting object
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
//based on sal
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
//based on hiredate
employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
})
```
## 8. forEach loop
- JavaScript Array forEach() method to exeucte a function on every element in an array.
- The forEach() method iterates over elements in an array and executes a predefined function once per element.
- **Syntax:** Array.forEach(callback [, thisArg]);
- Callback function has 3 args currentElement index array & index and array are optional.
- Note that the forEach() function returns undefined therefore it is not chainable like other iterative methods: filter(), map(), some(), every(), and sort().
- One limitation of the forEach() method in comparison with the for loop is that you cannot use the break or continue statement to control the loop.
- To terminate the loop in the forEach() method, you must throw an exception inside the callback function.
```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number,index,array) {
    console.log(number*index);
});
```
let numArray = [1,2,3,5,100,200,250]
//To get length of array
numArray.length //7

/*Adding/removing elements*/

//push() – add one or more elements to the end of an array.
numArray.push(300)
numArray.push(400,500,900) //    

//unshift() – add one or more elements to the beginning of an array
numArray.unshift(50)
numArray.unshift(123,12,15)

//pop remove last element from array
numArray.pop() //removes 900 from array

//shift remove first element from array
numArray.shift() //removes 123 from array


//Splice 

"use strict";
let scores = [1, 2, 3, 4, 5];
//1.Delete element
//scores.splice(1,3)  //retrun [1,5]
//2. Insert element

scores.splice(2,3,100,300,400) //will replace 3 with 100,300,400 result: [1,2,100,300,400,4,5]

console.log(scores) 
//3. Rename elements
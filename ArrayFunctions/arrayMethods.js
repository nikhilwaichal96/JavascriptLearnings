// *1. Push()

let Numbers = [1, 2, 3, 4, 5];
let pushResult = Numbers.push(3,34,56);
console.log(pushResult) //Returns length of new array



// *2. Pop()

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let popResult = fruits.pop(); //Removes last element of array

console.log(popResult); // Mango

console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]


// *3 toString()

let transportation = [1,2, 3, 4];
console.log(typeof transportation); // Object
let conversionToStringResult = transportation.toString(); 
console.log("After conversion ",conversionToStringResult)  // 1,2,3,4
console.log(typeof conversionToStringResult); // String



// *4 join()

let num = [1,2,3,4,5,6,7,8,9,10];

let join_result = num.join("_")

console.log("Join result is "+join_result); //Join result is 1_2_3_4_5_6_7_8_9_10




// *5 shift()

let MarvelsHero = ["IronMan" , "Thor", "Hulk", "Captain America"];

let shiftResult = MarvelsHero.shift(); //Returns first element in array and removes it from orignal array

console.log("Shift result is "+ shiftResult)

console.log("After shift result "+MarvelsHero); 

// *6 unshift()

let GymExe = ["PushUp", "PullUp", "Squats", "DeadLift"];
let unshiftResult = GymExe.unshift("BenchPress", "ShoulderPress");
console.log(unshiftResult); // 6 (Addes one or more elements at start of array and returns length of array)
console.log("After unshifting array " +GymExe); 


// *7 Slice()

let Vege = ["Tomato", "Potato", "Onion", "Carrot", "Cabbage"];
let sliceResult = Vege.slice(0,3) // Returns new array from start index to end index-1
console.log("After slicing result",sliceResult); //returns [ 'Tomato', 'Potato', 'Onion' ]
console.log(Vege); // [ 'Tomato', 'Potato', 'Onion', 'Carrot', 'Cabbage' ]



// *8 Splice()

// a. Removing elements
// let cars = ["BMW", "Benz", "Audi", "Toyota", "Honda"];

// let result = cars.splice(1,1)
// console.log(result); // [ 'Benz', 'Audi' ]
// console.log(cars); // [ 'BMW', 'Toyota', 'Honda' ]


// b. Adding elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let result = fruits.splice(2,0,"Lemon","kiwi","Pineapple")
// console.log(result); // []

// console.log(fruits); 


// c. Replacing elements

let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
let colorsResult = colors.splice(0,2,"Black", "white")
console.log(colorsResult); // [ 'Black', 'White', 'Blue', 'Yellow', 'Pink' ]



// *9 Concat()

let arr1 = ["thor" , "ironman" , "captain america"];
let arr2 = ["batman" , "superman"]

let result = arr1.concat(arr2)

console.log(result); // [ 'thor', 'ironman', 'captain america', 'batman', 'superman]
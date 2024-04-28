//No Parameters
const greet = () => "Hello";
console.log(greet()); //Hello

//Single param
const square = a =>  a * a;
console.log(`Square of 10 is ${square(10)}`)

//Multiple param
const add = (a, b) => a + b;
console.log(`Sum of 10 and 20 is ${add(10, 20)}`)

//Multiple lines
const greetPerson = name => {
    return `Hello ${name}`;
}
console.log(greetPerson("John"))    

//Return object literals
const getPerson = (firstName,lastName) => ({name: firstName,lname:lastName});
console.log(getPerson("Nikhil","Waichal"))

//Higher order function and callback function
const numbers = [1,2,3,4,5]
const doubled = numbers.map(num => num * 2);
console.log(doubled)


var name = "Nitin";
var id = "1002";
function Person(name) {
    const id = '1001'
    this.sayHello = () => {
        console.log("Hello, my name is " + name + "Your ID is "+ id);
        let self = this;
        console.log("Hello, my name is " + self.name + " Your ID is "+ self.id); //this.name is undefined as it refers to global obj
    };
}

const person1 = new Person("Nikhil");
person1.sayHello(); 

//Arrow functions for closures:
function outerFunction() {
    let count = 0;

    return () => {
        count++;
        console.log(`Count: ${count}`);
    };
}

const incrementCounter = outerFunction();
incrementCounter(); // Output: Count: 1
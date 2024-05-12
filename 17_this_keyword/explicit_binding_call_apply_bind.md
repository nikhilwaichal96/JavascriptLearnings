## Explicit Binding
In JavaScript, you can explicitly specify the value of this within a function using methods like call, apply, or bind. This allows you to control the context in which a function is executed.
- They are used for function reusability 
- we can borrow method from other object 
- we can use a common generic method with different object
- In JavaScript, a function is an instance of the Function type. Function.prototype type has the call() method
  call method is a prototype method of function  allows you to change the value of this inside the function and invoke the function with the new value of this.
- In JavaScript all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object
- Call Apply Bind allows an object to borrow the method of another object without duplicating the code.
  
  #### Why call bind apply are required?
  We cant use normal function  invocation because variable inside it will always be treated as window object or undefined.
  By default this  keyword inside the function refers to the global object.But in Strict mode it is set as undefined

   #### What is the difference between Call, Apply and Bind?
 - Call: The call() method invokes a function with a given this value and arguments provided one by one
 - Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
 - Bind: returns a new function, allowing you to pass any number of arguments

### call
call calls a function with a given this value and arguments provided individually.
- The call() method takes one required argument, which is the value of this that you want to use inside the function, and any number of optional arguments that you want to pass to the function.
- Example: functionName.call(thisArg, arg1, arg2, ...);


### apply
apply calls a function with a given this value and arguments provided as an array.
Syntax: functionName.apply(thisArg, [args]);

- The apply() method is similar to the call() method
- The apply() method takes arguments as an array.



### bind
bind creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

In JavaScript, the bind() function is used to create a new function that, when called, has its this keyword set to a specific value. It allows you to specify the context in which a function is invoked.

- Using bind() method, an object can borrow a method from another object.
- bind() is particularly useful when you want to pass a method as a callback (e.g., to event listeners or timers) and you want to ensure that this inside the method refers to a specific object.
- When a function is used as a callback, this is lost.

```javascript
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullAddress: function (city, country) {
        return this.firstName + " " + city + " " + country

    }
}
const person1 = {
    firstName: "Nikhil",
    lastName: "Waichal"
}
const person2 = {
    firstName: "Nishi",
    lastName: "Waichal"
}

// Call method
console.log("Using call method ", person.fullName.call(person1))
console.log("Using call method with args ", person.fullAddress.call(person1, "pune", "India"))

// Apply method
console.log("Using Apply method ", person.fullName.apply(person1))
console.log("Using Apply method with args ", person.fullAddress.apply(person1, ["pune", "India"]))

// Bind method
const getFullname = person.fullAddress.bind(person1, ["pune", "India"])
console.log("Using bind method ", getFullname())

//Bind use for preserving this when function is called as callback,

const obj = {
    name: 'John',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

// Scenario 1: Direct invocation
obj.greet(); // Output: Hello, John!

// Scenario 2: Using setTimeout with a function as a callback
setTimeout(obj.greet, 1000); // Output after 1 second: Hello, undefined!

// Using bind to maintain the this context
setTimeout(obj.greet.bind(obj), 1000); // Output after 1 second: Hello, John!

```

In all these examples, we explicitly bind the this context of the fullName function to the person object, ensuring that this refers to person when the function is called.
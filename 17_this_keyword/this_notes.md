# This keyword in Javascript

This keyword is refered as current execution context.
Its behavior depends on how it is been invoked (used/call).


- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.

## This usages in Object method.
In an object method, this refers to the object.
```
let obj = {
            fname :"Nikhil",
            lname:"Waichal",
            fullName: function(){
                return this.fname + " " + this.lname;
            },
            fullNameRev: ()=>{
                return this.fname + " "+ this.lname
            }
        }

        //object method context
        console.log(obj.fullName()); // Nikhi Waichal

        //arrow function context
        console.log(obj.fullNameRev());//undefined
```

## This usages in global
When this is used alone it is refered to global context (Window in browser and global in nodejs)

```
    console.log(this === window)
```
## This usages in function
When this is used in function, it is refered to global context (Window in browser and global in nodejs)

```javascript

 //################## Named Function context #########################
function myFunction() {
    return this; //refer to global object
  }
  console.log(myFunction())

  //use strict
  function myFunction() {
    return this;  //undefined
  }

  //########### Implicit function binding #######################
  function greet() {
    console.log(this.name); //this is refered as object which owns greet function
}

const person = {
    name: 'John',
    sayHello: greet
};

person.sayHello(); // Outputs: John
  ```


  ## this usags with call and apply explicit binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.

```javascript
//########### Explicit Function Binding ##############
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName; // here this refered as person2 obj
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
console.log("This usage in call method ",person1.fullName.call(person2)); //call method
console.log("This usages in apply method ",person1.fullName.apply([person1])) //Apply method

const member = {
  firstName:"Nishi",
  lastName: "Waichal",
}
const fullNameOfMember = person1.fullName.bind(member)
console.log("This usages in bind method ",fullNameOfMember()); //bind method
```

## function Constructor
 When a function is used as a constructor with the new keyword, this refers to the newly created object.
 ```javascript
 function Person(name) {
    this.name = name;
}

const john = new Person('John');
console.log(john.name); // Outputs: John
 ```

## this is arrow function
Arrow Functions: Arrow functions do not have their own this binding. Instead, they lexically capture the this value of the enclosing context.
```
let obj = {
    fname :"Nikhil",
    fullNameRev: ()=>{
        return this.fname + " "+ this.lname //undefined
    },
    
    displayWelcomeMessage: function() {
      const innerFunc = () => {
          console.log('Hello, ' + this.fname + '!'); //take fname from lexical scope
      };
      innerFunc();
  }
}
console.log(obj.fullNameRev());
console.log(obj.displayWelcomeMessage())
```
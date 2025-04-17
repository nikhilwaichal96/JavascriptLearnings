let obj = {
    fname :"Nikhil",
    lname:"Waichal",
    fullName: function(){
        return this.fname + " " + this.lname;
    },
    fullNameRev: ()=>{
        return this.fname + " "+ this.lname
    },
    myFunction : function() {
        return this;           //refer to current obj object
    },
    displayWelcomeMessage: function() {
      const innerFunc = () => {
          console.log('Hello, ' + this.fname + '!');
      };
      innerFunc();
  }
}

//object method context
console.log(obj.fullName());

//arrow function context
console.log(obj.fullNameRev());

//arrow function with lexical scoping
//Arrow functions do not have their own this binding. Instead, they lexically capture the this value of the enclosing context.

console.log(obj.displayWelcomeMessage())
//###############  Global Execution context ############################
function myFunction() {
    return this; //refer to global object
  }
  // console.log(myFunction())

  //use strict
  function myFunction() {
    return this;  //undefined
  }

//################## Named Function context #########################
  function greet() {
    console.log(this.name); //this is refered as object which owns greet function
}

const person = {
    name: 'John',
    sayHello: greet
};

person.sayHello(); // Outputs: John

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
console.log("This usages in apply method ",person1.fullName.apply([person2])) //Apply method

const member = {
  firstName:"Nishi",
  lastName: "Waichal",
}
const fullNameOfMember = person1.fullName.bind(member)
console.log("This usages in bind method ",fullNameOfMember()); //bind method


//######################## Constructor invocation #################
//In constructor invocation this refers to the newly created object.
function Person(name) {
  this.name = name;
}
const john = new Person('John');
console.log(john.name); // Outputs: John
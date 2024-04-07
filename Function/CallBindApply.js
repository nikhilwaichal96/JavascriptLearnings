
/**
 * What is Call Apply and Bind in javascript.
 * In JavaScript, a function is an instance of the Function type. Function.prototype type has the call() method
 * call method is a prototype method of function  allows you to change the value of this inside the function and invoke the function with the new value of this.
 * The call() method takes one required argument, which is the value of this that you want to use inside the function, and any number of optional arguments that you want to pass to the function.
 * functionName.call(thisArg, arg1, arg2, ...);
 * 
 * They are used for function reusability 
 * we can borrow method from other object 
 * we can use a common generic method with different object
 * 
 * By default this  keyword inside the function refers to the global object.
 * But in Strict mode it is set as undefined
 * 
 * Why call bind apply are required?
 * We cant use normal function  invocation because variable inside it will always be treated as window object or undefined.
 * 
 * 
 * What is the difference between Call, Apply and Bind?
 * 
 * Call: The call() method invokes a function with a given this value and arguments provided one by one
 * Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
 * Bind: returns a new function, allowing you to pass any number of arguments
 * 
 */


/**
 * EXAMPLE OF CALL APPLY BIND
 */

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?var inviteEmployee1 = invite.bind(employee1);


var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?





////////////////////////////////Practice CODE//////////////////////////////////////

function getEmail(){
    return this.email =`${this.name}.${this.lastName}@school.com`;
}


let student = {
    name: "John",
    lastName:"Doe",
    age: 30,
    city: "New York",
    // email: function(){
    //     console.log(`${this.name}.${this.last}@school.com`);
    // }
    //email: getEmail(this.name,this.lastName)
}

let teacher = {
    name: "Tom",
    lastName: "Hanks",
    age:   45,
    city: "London",
    // email: function(){
    //     console.log(`${this.name}.${this.last}@school.com`);
    // }
    //email:getEmail(this.name, this.lastName),
}   

function chooseSubject(sub1,sub2,sub3){
    return [sub1,sub2,sub3]
}
console.log("Student email using call method"+getEmail.call(student))

console.log("Teacher email using call method"+getEmail.call(teacher))



console.log("Student email using apply method"+getEmail.apply(student))
console.log("Teacher email using apply method"+getEmail.apply(teacher))



console.log("Teacher teaches "+chooseSubject.apply(teacher,["Math", "English", "Science"]))
console.log("Student learns "+chooseSubject.call(student,"Math", "English", "Science"))


let binderOp = getEmail.bind(student)
console.log("Before binding" + binderOp)
binderOp()
console.log("Binder example ",binderOp())


console.log("Directly calling bind method "+ getEmail.bind(teacher)())


var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say().call(this,"Nikhil")// Hi Nikhil        this is refered as global object

say.call(messenger,"Niks2") // Hello Niks2   This will be the context of the function and it will print Hello
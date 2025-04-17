
//Anonymous function
 let show = function() {
    console.log('Anonymous function as expression assigned to variable show');
};

show();

//anonymous function  as argument to function
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

//anonymous function used for creating function and Immediately invoke it
(function() {
    console.log('IIFE');
})();

let person = {
    firstName: 'Nikhil',
    lastName: 'Waichal'
};

//passing args to anonymous function
(function () {
    console.log("Full name of person is ",person.firstName + ' ' + person.lastName);
})(person);

//Arrow function is shorthand to declare Anonymous function
let display = () => console.log('Anonymous function using arrow function');
display();

let add = (a, b) => a + b;   

console.log("Addition using arrow fn",add(4,10))


const myFunction = function(){ //Anonymous function assigned to a variable
    //do something
  };
  
  [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
    //do something
  });
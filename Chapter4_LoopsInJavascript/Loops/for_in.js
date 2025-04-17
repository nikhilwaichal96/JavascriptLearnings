var person = {
    firstPerson: {
        firstName: 'John',
        lastName: 'Doe',
        ssn: '299-24-2351'
    },
    secondPerson: {
        firstName: 'John',
        lastName: 'Doe',
        ssn: '299-24-2351'
    }

};

for (var prop in person.firstPerson) {
    console.log(prop + ':' + person.firstPerson[prop]);
}


//Inherit properties 
var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;


for(const prop in circle) {
    console.log("Printing key properties inherited "+prop); //print color,radius
}

//if we just want to iterate on obj properties then we need to use hasOwnProperty()

for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log("Just printing properties of obj not prototype inherited keys "+prop); //radius
    }
}

//Why we shouldn't use for in loop with arrays

//It inherits property from Arrays.prototype
Array.prototype.foo = 100;  //set property in builtin array 

const items = [10, 20, 30]; 
let total = 0;

for (var prop in items) {
  console.log({ prop, value: items[prop] });// prop foo gets inherited
  total += items[prop];
}
console.log(total); // 160 property is getting inherited

//Order is not preserved by for in loop example:-
var arr = [];
// set the third element to 3, other elements are `undefined`
arr[2] = 3; 
console.log("with traditional loop")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    //print undefined undefined 3
}

console.log("with for in loop")
for (const key in arr) {
    console.log(arr[key]); // print 3 for in loop ignores undefined
}
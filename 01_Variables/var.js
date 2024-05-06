//use var if you MUST support old browsers.

var x = 10;
if (true) {
    var x = 20;
}
console.log(x); // Outputs: 20 As variable declare with var keyword have global scope and not block scope

var sum =10
function add(){
    var sum = 100 +10
    return sum
}
console.log(add())
console.log(sum)




//Redeclaration
var a = 10;
// Here a is 10

{
var a = 2;
// Here a is 2
}

// Here a is 2
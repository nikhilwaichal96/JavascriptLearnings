function say(message='Hi') {  //Hi is default param for say function
    console.log(message);
}
say(); // 'Hi'
say('Hello') // 'Hello
say(undefined); // 'Hi'


function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

function requiredArg() {
    throw new Error('The argument is required');
 }
 function add(x = requiredArg(), y = requiredArg()){
    return x + y;
 }
 
 add(10); // error
 add(10,20); // OK

console.log(add()); // 4

//Uncaught ReferenceError: Cannot access 'y' before initialization
function subtract( p = l, q = 1 ) {
    console.log("Value of P is"+p)
    console.log("Value of q is"+q)
    console.log("Substraction ",p-q)
    return p - q;
}
subtract(10);


function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3
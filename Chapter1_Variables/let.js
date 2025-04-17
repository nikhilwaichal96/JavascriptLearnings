


let y = 10;     //Here Y value is 10
if (true) {
    let y = 20; // In this block y value is 20
}
console.log(y); // Outputs: y =10

//Can't access variable declared with let keyword out of block 
{
    let x = 2;
}
//console.log(x) //ReferenceError: x is not defined


//We can't redeclare variable declare with let keyword within same block.
let x = "John Doe";

//let x = 0; Cannot redeclare block-scoped variable 'x'
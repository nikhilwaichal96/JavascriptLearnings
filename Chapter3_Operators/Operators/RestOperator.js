/*
 * Rest parameters in JS When parameters are passed with ..., it is called rest parameters 
 * Rest parameters are used to pass multiple values to a function
 * We can pass as many values as we want to a function using rest parameters
 * parameters get bundles as an array that we can use in the function
 * Rest parameters are alwayes passed as last parameters in a function
 * The rest parameter (...) packs the elements into an array.
 * the spread operator can be anywhere:
 * 

 */



function sum(...numbers) {
    let total = 0;
    for (number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


function displayFullName(...names) {
    let fullName = "";
    for (cname of names) {
        fullName += cname + " ";
    }
    return fullName;

}
console.log(displayFullName("Nikhil", "Nitin", "Waichal"));

squares = (...numbers) => {
    let squares = [];
    for (number of numbers) {
        squares.push(number * number);
    }
    return squares;
}

console.log(squares(2,4,6,8,10,12,14,16,18,20));
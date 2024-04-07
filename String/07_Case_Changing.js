/**
 * To Uppercase
 * returns a new string with all characters converted to uppercase.
 * String is immutable. Therefore, the toUpperCase() method doesn’t change the original string
 * Syntax: str.toUpperCase()
 * 
 * If you call the toUpperCase() method on null or undefined, the method will throw a TypeError exception. 
 */

let message = 'Hello';
let newMessage = message.toUpperCase();
console.log(newMessage);//HELLO
console.log(message);//Hello  string is immutable so it doesnt change valueof string

message = newMessage;
console.log("After assigning new value to variable message"+message);

let a 
//console.log(a.toUpperCase()) //TypeError: Cannot read properties of undefined


const completed = true;
console.log(String.prototype.toUpperCase.call(completed));

const sal = 100;
console.log(sal+"".toUpperCase())
console.log(String.prototype.toUpperCase.apply(sal))


/**
 * TO  LOWERCASE
 * The toLowerCase() method returns a new string with all characters converted to lowercase.
 * string is immutable, the toLowerCase() method doesn’t change the original string
 * it returns a new string with all characters converted to lowercase.
 * Syntax str.toLowerCase()
 * If you call the toUpperCase() method on null or undefined, the method will throw a TypeError exception.
 */

const custMessage = 'Hi';
console.log(custMessage.toLowerCase());//Hi
console.log(String.prototype.toLowerCase.apply(sal)) //100

//console.log(a.toLowerCase()); throw type error 
console.log(a?.toLowerCase()); //undefined
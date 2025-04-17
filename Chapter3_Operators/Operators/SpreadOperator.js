/**
 * Spread operator is use to unbundle the array into individual elements.
 * 
 * The spread operator (...) unpacks the elements of an iterable object
 * 
 * Spread operator can be used anywhere
 * 
 * The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list.
 * 
 * used to clone an iterable object or merge iterable objects into one.
 */


//Spread operator used for cloning an array and merge into an new array
let rgb = [ 'red', 'green', 'blue' ];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge); //[ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black' ]



//Spread operator to clone object

/**
 * Shallow copy
 * shallow copy is a copy of an object that only duplicates the top-level structure, while the nested objects or arrays within the original object are shared between the original and the clonned object
 * if you modify a nested object within the copy, it will also affect the original object, and vice versa. As nested objects are shared between the original and the clonned object, they are not copied they are just store as refernce
 * The spread operator (...) is often used to perform shallow copies of objects or arrays
 * When you use the spread operator to copy an object, it creates a new object and copies all enumerable own properties of the original object into the new object
 * when you use the spread operator to copy an array, it creates a new array and copies all elements of the original array into the new array.
 * 
 */
const circle = {
    radius: 10,
    style: {
        color: 'blue'
    }
};

const clonedCircle = {
    ...circle
};


clonedCircle.style = 'red';
circle.radius = 20;
circle.area = Math.PI * circle.radius * circle.radius;

console.log("Clonned circle ",clonedCircle);
console.log("Orignal circle ",circle)
//cloning is always shallow meaning that if the object has nested object then the nested object will be copied by reference



const square = {
    length: 10,
    width: 20,
    height:30,
    color: 'blue'
};

const sqareStyle = {
    backgroundColor: 'red',
    height:10

};

const squareCssProperty = {
    ...square,
    ...sqareStyle
};

console.log("Square css ",squareCssProperty);
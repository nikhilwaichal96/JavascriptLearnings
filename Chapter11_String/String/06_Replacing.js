/**
 * the JavaScript String replace() method
 * 
 * returns a new string with a substring (substr) replaced by a new one (newSubstr). 
 * if no matchign substring found it will return same string
 * only the first occurrence of the substring gets replaced with the new substring.
 * 
 * Syntax: let newStr = str.replace(substr, newSubstr);
 * the replace() method doesn’t change the original string. It returns a new string.
 * 
 */

let str = 'JS will, JS will rock you!';
let newStr = str.replace('JS','JavaScript');
console.log(newStr);//matching o/p = JavaScript will, JS will rock you! only 1st occurence is changed.
console.log(str.replace('Nikhil','Nikhil Waichal'))// No matching case: o/p = JS will, JS will rock you!


//To replace all occurrences of a substring in a string with a new one, you must use a regular expression.
newStr= str.replace(/JS/g,'JavaScript');
console.log("After usign regex "+newStr);



//Replacer function

let sentence = "I like to eat, eat, eat apples and bananas";
let re = /apples|bananas/gi;

let newSentence = sentence.replace(re, (match) => { 
    console.log({match}); 
    return match.toUpperCase();
});

console.log("Replacer function: "+newSentence);

/**
 * Replace All
 * replaces all occurrences of a substring with a new string.
 * 
 */

 

console.log("Replace All function"+str.replaceAll('JS','JavaScript'));


let pattern = /js/gi;

const matcherString =str.replaceAll(pattern, function(match, offset, str) {
    if(match === 'JS') return 'JavaScript';
    if(match === 'Js') return 'Javascript';
    if(match === 'js') return 'javascript';
    return '';
});

console.log(matcherString);
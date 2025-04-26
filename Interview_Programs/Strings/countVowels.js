let inputString = 'Hi My name is Nikhil Nice to Meet You!!'
let vowels = 'aeiou'
inputString = inputString.toLowerCase();
let vowelsCount = 0;
let consonantsCount = 0;
for (let char of inputString) {
    if (vowels.includes(char)) {
        vowelsCount++;
    } else if (char >= 'a' && char <= 'z') {
        consonantsCount++;
    }
}
console.log(`Vowels Count: ${vowelsCount}`);
console.log(`Consonants Count: ${consonantsCount}`);
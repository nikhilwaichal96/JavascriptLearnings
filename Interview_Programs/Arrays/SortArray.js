let inputArr = [1, 2, 3, 4, 5];

//Acending Order
for(let i=0; i < inputArr.length; i++){
    for(let j = 0; j < inputArr.length - i - 1; j++){
        if(inputArr[j] > inputArr[j + 1]){
            let temp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = temp;
        }
    }
}
console.log(inputArr);
for(let i=0; i < inputArr.length; i++){
    for(let j = 0; j < inputArr.length - i - 1; j++){
        if(inputArr[j] < inputArr[j + 1]){
            let temp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = temp;
        }
    }
}
console.log(inputArr);
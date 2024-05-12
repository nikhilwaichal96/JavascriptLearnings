//Named functions as callback
function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log(filter(numbers, isOdd));
  console.log(filter(numbers, isEven));

  //Anyonomous function
  let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
  });
  console.log("Anonymous Function Callback",oddNumbers)
  
  //Arrow function as callback
  let evenNumbers = filter(numbers, (number) => number % 2 == 0);
  console.log("Arrow Function Callback",evenNumbers)
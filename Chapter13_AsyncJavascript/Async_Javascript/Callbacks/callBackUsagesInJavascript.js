// 1. Async Javascript

// Example of fetching data from a server asynchronously using a callback
function fetchData(callback) {
    setTimeout(function () {
        const data = "Some fetched data";
        callback(null, data); // Pass null as the error and data as the result
    }, 2000); // Simulating a delay of 2 seconds
}

// Define a callback function to handle the fetched data
function handleData(error, data) {
    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log("Received data:", data);
    }
}

// Call fetchData and pass handleData as the callback function
fetchData(handleData);

//2. Event handling
// Example of event handling using callbacks
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

// You can also define the event handler separately
function handleClick() {
    console.log("Button clicked!");
}

document.getElementById("myButton").addEventListener("click", handleClick);

//3.Modulerize code for reusability
// Example of modularization and reusability using callbacks
function performOperation(x, y, callback) {
    const result = x + y;
    callback(result);
}

function logResult(result) {
    console.log("Result:", result);
}

performOperation(3, 4, logResult); // Output: Result: 7


//4.Error handling
// Example of error handling using callbacks
function divide(x, y, callback) {
    if (y === 0) {
      callback(new Error("Division by zero"));
    } else {
      callback(null, x / y);
    }
  }
  
  function handleResult(error, result) {
    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("Result:", result);
    }
  }
  
  divide(10, 0, handleResult); // Output: Error: Division by zero
  
  //5.Defining control flow
  // Example of control flow using callbacks
function stepOne(callback) {
    setTimeout(function() {
      console.log("Step One completed");
      callback();
    }, 1000);
  }
  
  function stepTwo(callback) {
    setTimeout(function() {
      console.log("Step Two completed");
      callback();
    }, 1500);
  }
  
  function stepThree() {
    console.log("Step Three completed");
  }
  
  stepOne(function() {
    stepTwo(function() {
      stepThree();
    });
  });
  
  //6. Higher order function
  // Example of using callbacks with higher-order functions
const numbers = [1, 2, 3, 4, 5];

// Map: Multiply each number by 2
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});
console.log("Doubled numbers:", doubledNumbers);

// Filter: Keep only even numbers
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Reduce: Sum of all numbers
const sum = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log("Sum of numbers:", sum);
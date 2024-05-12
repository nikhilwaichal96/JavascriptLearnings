# Callbacks in Javascript

- Callbacks are functions that are passed as arguments to other functions and are executed when the function is called. They are used to handle Async code which takes some time for performing operations. 
- When you pass a function as an argument, remember not to use parenthesis.
  Example  calculator(1,2,mycallbackFunction)

### Why we need callbacks
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined. So sometimes we may need to execute code sequentially or conditionally based on the result of operations. 

### usages of Callbacks
- 1. Asynchronous Operations: JavaScript is single-threaded, meaning it can only execute one operation at a time. Asynchronous operations like fetching data from a server, reading files, or waiting for user input can cause delays. Callbacks allow you to specify what should happen once these operations complete, without blocking the execution of other code.

- 2. Event Handling: In web development, user interactions such as clicks, mouse movements, and keyboard inputs are events. Callbacks are commonly used to define what should happen when these events occur. For example, you might want to display a message when a button is clicked or submit a form when the user presses Enter.

- 3. Modularization and Reusability: Callbacks enable you to write modular and reusable code. Instead of hardcoding specific behavior within a function, you can pass a callback to customize the behavior dynamically. This promotes code flexibility and makes it easier to adapt your code to different use cases.

- 4. Error Handling: Callbacks can handle errors gracefully by passing an error object as the first argument to the callback function. This allows you to detect and handle errors that occur during asynchronous operations or event handling.

- 5. Control Flow: Callbacks facilitate control flow in JavaScript, especially in scenarios where you need to execute code sequentially or conditionally based on the result of asynchronous operations. Techniques like callback chaining, parallel execution, and error handling with callbacks help you manage complex control flow scenarios effectively.
  
- 6. Higher Order functions: Callback functions are used in Higher order functions like map filter reduce.

```javascript
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
```

### callback with different function types
 - using Named function
 - Anonymous function
 - Arrowfunction

```javascript
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
```
# Asynchrounous callbacks

An asynchronous callback in JavaScript refers to a function that is passed as an argument to another function and is executed asynchronously, meaning it will run at a later time or after some asynchronous operation has completed.

Asynchronous operations, such as fetching data from a server, reading files, or waiting for user input, don't block the execution of JavaScript code. Instead, they execute in the background, and the rest of the code continues to run. When the asynchronous operation completes, it triggers the execution of the callback function.

 Asynchronous callbacks allow JavaScript to perform tasks without waiting for them to complete. This non-blocking behavior is crucial for building responsive and efficient applications, especially in web development where interactions with servers and user input can introduce delays.

 Asynchronous callbacks are commonly used to handle the results of asynchronous operations. Once the operation completes, the callback function is called with the result (or an error if the operation failed). This enables you to process the result or handle errors appropriately.

 To handle asynchronous operations, functions often accept callback functions as arguments. These callbacks specify what should happen once the operation completes.

 ## How javascript handles async code?

 Javascript execute async code with callback queue and event looping
 - ### callback queue 
  1. When an asynchronous operation completes, its corresponding callback function is not immediately executed. Instead, it's placed in the callback queue.
  2. The callback queue is a FIFO (First In, First Out) queue that holds callback functions waiting to be executed.
  3. Each callback in the queue represents a task that needs to be processed by the JavaScript engine.
   
 - ### Event loop
  1. The event loop is a critical component of the JavaScript runtime responsible for managing the execution of code, including handling asynchronous operations.
  2. It continuously checks the call stack and the callback queue to determine which tasks should be executed next.
  3. If the call stack is empty and there are callbacks in the queue, the event loop moves the first callback from the queue to the call stack for execution.
  4. This process ensures that JavaScript remains non-blocking and responsive, as it allows the main thread to handle other tasks while waiting for asynchronous operations to complete.


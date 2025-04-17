## Async Await notes
- async/await keywords that build on top of promises, allowing you to write asynchronous code that looks more like synchronous code and is more readable.
-  Technically speaking, the async / await is syntactic sugar for promises.
-  The await will wait for the Promise returned from the f() to settle. The await keyword can be used only inside the async functions
-  

### Async keyword
 - The async keyword allows you to define a function that handles asynchronous operations.
 - To define an async function, you place the async keyword in front of the function keyword as follows:
  ```javascript
    async function sayHi() {
        return 'Hi';
    }

    //explicitly returning promise
    async function sayHi() {
    return Promise.resolve('Hi');
    }
    //function expression
    let sayHi = async function () {
    return 'Hi';
    }
    //arrow function
    let sayHi = async () => {
        return 'Hi';
    }
  ```
  - Asynchronous functions execute asynchronously via the event loop. It always returns a Promise. 
  
  - The async function always returns a Promise, even if the function does not use the return statement. If the function does not return a Promise
  

  ### Await keyword

  - You use the await keyword to wait for a Promise to settle either in a resolved or rejected state. You can use the await keyword only inside an async function:
  - await keyword instructs the JavaScript engine to wait for the function to complete
  - If a promise resolves, the await promise returns the result. However, when the promise is rejected, the await promise will throw an error as if there were a throw statement
  - You can catch the error by using the try...catch statement, the same way as a regular throw statement
  
  ```javascript
  async function display() {
        let result = await sayHi();
        console.log(result);
    }
  ```
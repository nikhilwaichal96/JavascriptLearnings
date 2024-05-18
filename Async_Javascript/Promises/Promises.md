# Promises: Asynchronous Operations
 1. Promises are a way to handle asynchronous operations in JavaScript.
 2. Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
 3. Promise act as a contract between the caller and the executor.  
 4. promise is an object that encapsulates the result of an asynchronous operation


## promise states
 promise object has a state that can be one of the following:

- 1. Pending
- 2. Fulfilled with a value
- 3. Rejected for a reason
**Pending:** In the beginning, the state of a promise is pending, indicating that the asynchronous operation is in progress. Depending on the result of the asynchronous operation, the state changes to either fulfilled or rejected.

**Fulfilled:**:  The fulfilled state indicates that the asynchronous operation was completed successfully.
If the asynchronous operation completes successfully, the executor will call the resolve() function to change the state of the promise from pending to fulfilled with a value.

**Rejected** : The rejected state indicates that the asynchronous operation failed.
In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the error reason.

Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.

**Creating a Promise:**

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}
```

- `new Promise((resolve, reject) => { ... })`: Creates a new promise object.
- `resolve(value)`: Called for a successful operation.
- `reject(error)`: Called for a failed operation.

**Consuming a Promise:**

```javascript
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
    .finally(console.log("Operation completed"))
```

- `.then(callback)`: Handles resolved value.
- `.catch(callback)`: Handles rejection.


### then catch finally

1) The then() method
    To get the value of a promise when it’s fulfilled, you call the then() method of the promise object. The following shows the syntax of the then() method:

     The then() method accepts two callback functions: onFulfilled and onRejected.
   - To just handler sucess case: promise.then(onFullfilled)
   - To just handler error case: promise.then(undefined,onRejected)
   - To handle both sucess and error case : promise.then(onFulfilled,onRejected);


    The then() method calls the onFulfilled() with a value, if the promise is fulfilled or the onRejected() with an error if the promise is rejected.

    **Note that both onFulfilled and onRejected arguments are optional.**

2) The catch() method
    - catch method is used to deal with error handling in promises.
    - If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object:

       promise.catch(onRejected);

    - Internally, the catch() method invokes the then(undefined, onRejected) method.
    
    - When you raise an exception outside the promise, you must catch it with try/catch:
    
    - If you throw an error inside the promise, the catch() method will catch it, not the try/catch.
     
     -If you chain promises, the catch() method will catch errors that occur in any promise.   
    
    - Inside the promise, the catch() method will catch the error caused by the throw statement and reject().
    
    - If an error occurs and you don’t have the catch() method, the JavaScript engine issues a runtime error and stops the program.

3) The finally() method
    - JavaScript Promise finally() method to execute the code once the promise is settled, regardless of its outcome.
    - Used for clean up
    - Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected
    ```javascript
  getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });
  ```


  ## promise chaining

  - To execute asynchronous operations in sequence in Javascript we do promise chaining
  - Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step.
  - then() method returns a new Promise with a value resolved to a value, you can call the then() method and preapare promise chain to execute async code step by step
  - 
    ```javascript
        let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
    });

    p.then((result) => {
        console.log(result); // 10
        return result * 2;
    }).then((result) => {
        console.log(result); // 20
        return result * 3;
    }).then((result) => {
        console.log(result); // 60
        return result * 4;
    });

    ```

    ## promise.all
    Promise.all() static method to aggregate results from multiple asynchronous operations.

    - The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input promises

    - When all promises have been resolved, the values from these promises are passed into the callback of the then() method as an array.

    - In other words, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises.

    - If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise

    - Promise.all() is useful to aggregate the results from multiple asynchronous operations.
    
    - Promise.all() returns a Promise that is rejected if any of the input promises are rejected.

    - In short The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.
    

    ## promise race
    - The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

    - The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or reject


    ## promise any
    - If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise:
    - The Promise.any() returns a promise that is fulfilled with any first fulfilled promise even if some promises in the iterable object are rejected
    -If all promises in the iterable object are rejected or if the iterable object is empty, the Promise.any() return a promise that rejects with an AggregateError containing all the rejection reasons. The AggregateError is a subclass of Error.

    ## promise Allsettled
    - Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.
    - The Promise.allSettled() method returns a promise that resolves to an array of objects that each describes the result of the input promise.
    - Each object has two properties: status and value (or reason).
     - The status can be either fulfilled or rejected.
     - The value if case the promise is fulfilled or error/reason if the promise is rejected.

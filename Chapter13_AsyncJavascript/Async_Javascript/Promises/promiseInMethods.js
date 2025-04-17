let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log("Promise is fullfilled")
  console.log(users);
}
function onRejected(error) {
  console.log("Promise is Rejected")
  console.log(error);
}

const promise = getUsers();

//With just promiseFullfill
console.log("With just promiseFullfill")
promise.then(onFulfilled);

//With just fullfill and rejected
console.log("With Fullfill and rejected")
promise.then(onFulfilled, onRejected);

//When just error need to be handled
console.log("With error rejected")
promise.then(undefined, onRejected);


//To run code when promise is rejected
console.log("With catch block")
promise.catch(onRejected);




  promise.then(onFulfilled)
  .catch(onRejected)
  .finally(() => {
    console.log("Executing finally method")
  });
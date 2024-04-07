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
promise.then(onFulfilled, onRejected);


//To run code when promise is rejected
promise.catch(onRejected);




  promise.then(onFulfilled, onRejected)
  .catch(onRejected)
  .finally(() => {
    console.log("Executing finally method")
  });
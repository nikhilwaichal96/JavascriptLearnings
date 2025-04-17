
//Async callback example
function fetchData(callback) {
    // Simulating an asynchronous operation such as fetching data from a server
    setTimeout(function() {
      const data = "Some fetched data";
      // Once the data is fetched, call the callback function and pass the data to it
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Define a callback function to handle the fetched data
  function handleData(data) {
    console.log("Received data:", data);
  }
  
  // Call the fetchData function and pass the handleData function as a callback
  fetchData(handleData);


  //Callback function to handle errors
  //Here success and failure are callback function
  //Based on operation in download function it will invoke either success or failure callback function
  function download(url, success, failure) {
    setTimeout(() => {
      console.log(`Downloading the picture from ${url} ...`);
      !url ? failure(url) : success(url);
    }, 1000);
  }
  
  download(
    '',
    (url) => console.log(`Processing the picture ${url}`),
    (url) => console.log(`The '${url}' is not valid`)
  );

  //Callback hell example2:
  console.log("callback hell")
  function getUser(userId, callback) {
    console.log('Get user from the database.');
    setTimeout(() => {
        callback({
            userId: userId,
            username: 'john'
        });
    }, 1000);
}

function getServices(user, callback) {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
        callback(['Email', 'VPN', 'CDN']);
    }, 2 * 1000);
}

function getServiceCost(services, callback) {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
        callback(services.length * 100);
    }, 3 * 1000);
}

//Nested callback functions for async operations
getUser(100, (user) => {
  getServices(user, (services) => {
      getServiceCost(services, (cost) => {
          console.log(`The service cost is ${cost}`);
      });
  });
});


//promise chain to handle callback hell with grace
console.log("Promise chain")
function getUser(userId) {
  return new Promise((resolve, reject) => {
      console.log('Get user from the database.');
      setTimeout(() => {
          resolve({
              userId: userId,
              username: 'john'
          });
      }, 1000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
      console.log(`Get services of  ${user.username} from the API.`);
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN']);
      }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}.`);
      setTimeout(() => {
          resolve(services.length * 100);
      }, 3 * 1000);
  });
}
//chain async calls
getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);
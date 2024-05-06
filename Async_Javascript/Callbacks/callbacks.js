
// function filter(numbers, callback) {
//     let results = [];
//     for (const number of numbers) {
//         console.log(callback(number))
//       if (callback(number)) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
  
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
//   //Anonymous callback function
//   let oddNumbers = filter(numbers, function (number) { return number % 2 != 0});
  
//   console.log(oddNumbers);

//   function isEven(number){
//     return number % 2 == 0;
//   }

//   //Regular function callback
//   let evenNumbers = filter(numbers, isEven);
//   console.log(evenNumbers)

// //Arrow function callback
//   let squareOfNums = filter(numbers, (number) => number*number);
//   console.log("Square"+squareOfNums)


//  //Async callback

//  function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
        
//         // process the picture once it is completed
//         callback(url);
//     }, 10000);
// }

// function process(picture) {
//     console.log(`Processing ${picture}`);
// }

// let url = 'https://wwww.javascripttutorial.net/pic.jpg';
// download(url, process);


// //Multiple callbacks
// function performTasks(callback1, callback2, callback3, callback4, callback5) {
//     console.log("Performing Task 1...");
//     callback1(); // Call the first callback function
//     console.log("Performing Task 2...");
//     callback2(); // Call the second callback function
//     console.log("Performing Task 3...");
//     callback3(); // Call the third callback function
//     console.log("Performing Task 4...");
//     callback4(); // Call the fourth callback function
//     console.log("Performing Task 5...");
//     callback5(); // Call the fifth callback function
// }

// function callbackA() {
//     console.log("Callback A executed");
// }

// function callbackB() {
//     console.log("Callback B executed");
// }

// function callbackC() {
//     console.log("Callback C executed");
// }

// function callbackD() {
//     console.log("Callback D executed");
// }

// function callbackE() {
//     console.log("Callback E executed");
// }

// // Call the performTasks function and pass five callback functions
// performTasks(callbackA, callbackB, callbackC, callbackD, callbackE);



function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'nikhil', email: 'nikhilwaichal@yahoo.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  


  findUser('john', console.log);

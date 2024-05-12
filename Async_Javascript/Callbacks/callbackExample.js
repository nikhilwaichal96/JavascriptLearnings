
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
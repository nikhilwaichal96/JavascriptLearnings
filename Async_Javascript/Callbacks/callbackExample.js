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
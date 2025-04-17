// Function that fulfills a promise
async function fulfillFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise fulfilled!");
      }, 1000);
    });
  }
  
  // Function that rejects a promise
  async function rejectFunction() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Promise rejected!");
      }, 1000);
    });
  }
  
  // Function that uses async/await with try...catch
  async function handlePromises() {
    try {
      const fulfilledResult = await fulfillFunction();
      console.log(fulfilledResult);
    } catch (error) {
      console.error("Error from fulfillFunction:", error);
    }
  
    try {
      const rejectedResult = await rejectFunction();
      console.log(rejectedResult);
    } catch (error) {
      console.error("Error from rejectFunction:", error);
    }
  }
  
  // Call the function to see the output
  handlePromises();
  
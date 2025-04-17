const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      reject("Not able to find number p1")
      resolve(10);
    }, 1 * 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      reject("Not able to find number p2")
      resolve(20);
    }, 2 * 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);
  });
  
  //promise all will wait for all promise to complete and then provides promise result in array
  //if promise rejected it will throw an error of the first rejected promise:
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  }).catch((error)=>{
    console.log(error)
  });
  
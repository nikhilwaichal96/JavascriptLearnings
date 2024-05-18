const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 fulfilled');
      resolve(1);
    }, 1000);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 3');
      reject(2);
    }, 500);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);
  });

  const p = Promise.any([p1, p2,p3]);
  p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
  }).catch((error)=>{
    console.log(error)
  });

//With all errors
console.log("All errors")
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 1 rejected');
        reject('error1');
    }, 1000);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 2 rejected');
        reject('error2');
    }, 2000);
});

const p6 = Promise.any([p4, p5]);
p6.catch((e) => {
    console.log('Returned Promise');
    console.log(e, e.errors);
});

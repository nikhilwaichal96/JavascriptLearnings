let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            //For error thrown inside promise will be caught by promise.catch() method
            reject('Unauthorized access to the user data');
            throw new Error(" throwing error with throw keyword")
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    //For error thrown outside promise must be caught by try catch block
    let id =10
    if(id<0){
        throw new Error('Invalid id argument');
    }
   
    getUserById(id)
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`)); // if we dont write catch method to handle promise rejection it will throw unhandledPromiseRejection error
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}

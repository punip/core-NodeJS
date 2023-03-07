function async1() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Good morning');
            resolve();
        },2000);
    });
}

function async2() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('good noon');
            resolve();
        },3000);
    });
}

function async3() {
     return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('good eve');
            resolve();
        },2000);
    });
}

function async4 () {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('good night');
            resolve();
        },1000);
    });
}

async1()
    .then( () => {
        return async2();
    })
    .then( () => {
        return async3();
    })
    .then( () => {
        return async4();
    })
    .then( () => {
        console.log('All async operations are done!');
    })
    .catch( (err) => {
        console.log(err);
    });

/*
setTimeout( ()=> {
    console.log('Good morning');

    setTimeout( () => {
        console.log('Good afternoon');

        setTimeout( () => {
            console.log('good evening');

            setTimeout( () => {
                console.log('good night');
            },1000);
            
        },2000);

    },3000);

},2000); */

// promise library 
// to make a asynchronous programs easy to read and structure 

// creating a promise
// class ---> promise ((f1, f2) => {
//   // write any asynchronous code( 5 secs) - 1 async code per promise object
//   // if success (after 5 secs)
//      // resolve(success data)---.> then() => {} )
//   //else 
//   // reject(err) ---> .catch(err) => )
// }) ---> promiseObj

// ******************************************************************

// consume the promise object
// promiseObj.then( (success data) => {
//   // write code to execute after the first promise success
//}).catch(err) => {
//   // write code to execute if first promise fails in future
// })
// ...
// ... 
//! Promises : 3 stages

//? 1. Pending : waiting till any  Result done or not Done
//? 2. Resolved :  return true means work done
//? 3. Rejected : return false means work not done yet

//? Built-In-Methods :
//* Then
//* Catch
//! Demo :
// let myPromiseFunction = () => {
//     return new Promise((resolve,reject)=>{

//     })  
// }

// myPromiseFunction()

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Called after 2 second");
    }, 2000)
})

pr.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("this syntax from finally will called no matter the promis fullfilled or not");
})
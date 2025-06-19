const Promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 2000);
})

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("failed"), 3000);
})

const Promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Third"), 100);
})

console.log(Promise1); //! Directly call without Then or Catch it means it is in PENDING state...


// Promise.all([Promise1, Promise2, Promise3])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Method completed");
//     })

// Promise.allSettled([Promise1, Promise2, Promise3])
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Method completed");
//     })

//* Race will proritiese the first one who called when  the execution like 1000, 3000, 5000, seconds so work as first come first serve method

//! Here the Output is Third because there is only 100ms so called very fast...


Promise.race([Promise1, Promise2, Promise3])
    .then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Method completed");
    })
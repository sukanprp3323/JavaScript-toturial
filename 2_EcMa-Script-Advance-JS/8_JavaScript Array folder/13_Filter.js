//!1st : Find method
//? Returns only 1 output from all Array ex:
// let numbers = [1,2,3,4,5,6,7,7,6,4,8,9]
// let Result = numbers.find((curElem)=>{
//     return curElem>2
// });
// console.log(Result);

//!2nd : FindIndex method
//? Returns index number same as Find method
// let number = [1, 2, 3, 4, 5, 6, 7, 7, 6, 4, 8, 9]

// let Result = number.map((curElem)=>{return curElem*5})

// let Result2 = Result.findIndex((curElem) => {
//     return curElem>19 //*return the index number of the value which is greater than 81
// });
// console.log(Result2);

//!3rd : Filter
//? Returns all the Remaining Elements from the array instead of 1st Element

let number = [1,2,3,4,5,6,7,8,9]

let Result = number.filter((curElem)=>{
    return curElem>3
})
console.log(Result);

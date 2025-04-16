//!1st Multiply each element with 2 of array using Map
// let Num = [1,2,3,4,5,6,7,8]
// let Multiply = Num.map((curElem)=>{
//     return curElem*2
// })
// console.log(Multiply);

// //!2nd convert string into Capitalize String example: apple => Apple
// let Fruits = ["apple","banana","cherry","watermelon"]

// let Capitalize = Fruits.map((curElem)=>{
//     return curElem.toUpperCase() //using for upperCase the letters 
// })
// console.log(Capitalize);

//!3rd square of all the Even Numbers in the Array
//* total 2 condition  1. check even or Odd/ 2. square that Even numbers

// let Num = [1,2,3,4,5,6,7,8,9,10]

// let Result = Num.map((curElem)=>{
//     if(curElem%2===0){
//         return curElem*curElem
//     }
// }).filter((curElem)=>{
//     console.log(curElem);
//     return curElem!==undefined
// }) 

// console.log(Result);

//!4th Add " Mr. " before every element of Array using Map

let Name = ["Ram", "Vinod", "Bharat", "Laxman"]
let addMr = Name.map((curElem) => {
    return `Mr. ${curElem}`
})
console.log(addMr);
//! 1. Add December at the last of an Array:

// const Months = ["January","February","March","April"]
// Months.push("December")
// Months.splice(Months.length,0,"December")
// console.log(Months)

//! 2. what is the Result value of splice Method
// --> it gives an Empty array
// console.log(Months.splice()) //Returns an Empty array []

//! 3. Update march to March:
// --> we can Use Splice for this que:
// const Months = ["January","February","march","April"]
// console.log(Months)
// let IndexToUpdate = Months.indexOf("march")
// Months.splice(IndexToUpdate,1,"March")// this ways are optional
// Months.splice(2,1,"March")
// console.log(Months)

//! 4. Delete June from an Array
const Months = ["January","February","march","June","April"]
let IndexToDelete = Months.indexOf("June")
Months.splice(IndexToDelete,1)
console.log(Months)
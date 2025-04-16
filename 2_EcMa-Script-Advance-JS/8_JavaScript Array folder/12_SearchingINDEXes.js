//! using for searching in any Array Data:
//? 3 Types 
/** 1. indexOF()
 *  2. LastIndexOF()
 *  3. IncludesOF()
*/

//! indexOF()
// let Persons = ["Ram","Hari","Sita","Bishal","Ram"]

// // Syntax: indexOf(searchElement,fromIndex)
// console.log(Persons.indexOf("Ram"))
// console.log(Persons.indexOf("Ram",1)) //*for where to start checking index. here starting for 1st index...

//! LastIndexOF()
// let Persons = ["Ram", "Hari", "Sita", "Bishal", "Ram"]

// console.log(Persons.indexOf("Ram")) //for first element index which is repeating in array
// console.log(Persons.lastIndexOf("Ram")) // for last element index which is Repeating in array
// console.log(Persons.lastIndexOf("Ram", 2))

//! includes()
let Persons = ["Ram", "Hari", "Sita", "Bishal", "Ram"]

console.log(Persons.includes("Hari")) //true
console.log(Persons.includes("sukan")) //False
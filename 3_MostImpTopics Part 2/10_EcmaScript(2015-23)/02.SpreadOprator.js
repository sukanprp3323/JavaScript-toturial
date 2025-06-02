//! Spread Operator: 
//* we can spread the data of an Array or Obect using this Operator

//! 1. Copying an Array:

// const Arr = ["apple","orange","banana","mango"]

// console.log(Arr);

// const copied = [...Arr]

// console.log(copied);

//? =============================================================================

//! 2. concating Arrays/combining : 
//* Merge 2 different Array

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

const ComBined = [...num1, ...num2]

console.log(ComBined);

//? =============================================================================

//! 3. Adding Elements to Existing Array :
//* i Want to add "Watermelon" in this array.

let Fruits = ["Apple", "Banana", "mango", "orange"]
// Fruits.push("watermelon","Grapes")
Fruits.push(...["Watermelon","Grapes"])

console.log(Fruits);

//? =============================================================================

//! 4. Best useCase of ...Spread operator
//* It converts the string into an Array of it single single element

//? Normal way
const Country ="India"
console.log(Country.split("")); //! use split for convert into 1-1 letter and make it another element like an Array

//? New way of Doing it
const State = "gujarat"
console.log([...State]);

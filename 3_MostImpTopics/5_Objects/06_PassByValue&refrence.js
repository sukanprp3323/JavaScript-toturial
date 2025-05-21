//! Pass by Value :

// let a = 10;
// const modifyValue = (x) => (x = 40)

// console.log(modifyValue(a));
// console.log(a);

////////////////////////////////////////////////////////////////////////////?

// let num1 = 100;
// let num2 = num1;

// console.log(num2);

// num2 = 20;
// console.log(num2);

//! Pass by Reference: Reference is use for changing the original data , and it means everyone have access to change the orignal Data.

// let obj = { id: 5, name: "CodeWithSukan" };
// let obj1 = obj;

// obj1.name = "JS Practicing";

// console.log("Original",obj);
// console.log(obj1);


//! i want to change other data but not Original Data... lets do
//? Object.Assign()

// let obj = { id: 5, name: "CodeWithSukan" };

// let newObj = Object.assign({},obj)

// newObj.name = "JS Practicing";

// console.log("original",obj);
// console.log(newObj);

//! Comparing Objects :

let obj1 = { Name: "Sukan" }
let obj2 = { Name: "Sukan" }
let obj3 = obj1

const isEqual = obj1 === obj2 ? true : false;  //! False because both are 2 different objects
console.log(isEqual); 

const isEqual1 = obj1 === obj3 ? true : false;
console.log(isEqual1);


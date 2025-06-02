//! 1. array.Flat() & array.Flatmap()
//? using for converting any nested array into normal array 

// const nestedArray = [1, 2, [3, 4], 5] //* Nested Array
// const nestedArray1 = [1, [2, [3, [4]], 5], 6, 7]

// const NormalArray = nestedArray.flat();
// const NormalArray1 = nestedArray1.flat(3);
// console.log(NormalArray);
// console.log(NormalArray1);

//! 2. FlatMap():

// const myName = ["my Name", "is", "sukan", "prajapati"]

// const arr = myName.flatMap((curElem) => curElem.split(" "))
// console.log(arr);
// console.log(arr[1]);

//! 3. Entries():
//? using for converiting an Object into Array

// const myData = { name: "Sukan", age: 30 }
// console.log(myData);

// const intoArray = Object.entries(myData)
// console.log(intoArray);

//! 4. fromEntries():
//? Array into Object

// const intoObject = Object.fromEntries(intoArray)
// console.log(intoObject);



// console.log(myData == intoObject)
//? false: because their memories are differents


//! 5. TrimEnd & TrimStart
//? using for removing starting #fff space and ending #fff space of any string

//! TrimStart: removes starting space of "String"

let str = "   sukan   " // length 11 including spaces
console.log(str); 
console.log(str.length);

const removeStartSpace = str.trimStart()
console.log(removeStartSpace);

//! TrimEnd: removes end spaces 0f "string"

const removeEndSpace = str.trimEnd()
console.log(removeEndSpace);

//! Trim: removes all the spaces from any string 

const str1 = "     hello i am sukan  "

const RemoveAllSpaces = str1.trim()
console.log(RemoveAllSpaces);


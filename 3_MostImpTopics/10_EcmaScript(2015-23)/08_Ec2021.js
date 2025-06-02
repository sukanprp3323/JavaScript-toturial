//! Topics:
//? String.prototype.ReplaceAll()
//? Logical Assignment Operator(//==,&&=,??=)
//? Numeric Separators
//? Promise.any()

//! 1. ReplaceALL()

const myName = "hello Sukan , hello JavaScript"
const Updated = myName.replaceAll("hello", "good morning")
console.log(Updated);

//? Removing Spacing between the words like this =

const wordSpacing = "hello    sukan   spaces are   between the   words"
const RemoveSpace = wordSpacing.replaceAll(/\s+/g," ")

console.log(RemoveSpace);

//! 2. Numeric separators(_) separate number with _

const bigNumber = 10_000_000;
console.log(bigNumber);

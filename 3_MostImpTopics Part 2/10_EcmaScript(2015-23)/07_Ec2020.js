//! topics:
//* 1. BigInt
//* 2. Nullish coalescing operator = ??
//* 3. Optional Chaining Operator = ?.
//* 4.promise.allsettled

//! 1. BIGINT:
//? using for use any biggest number which is more bigger than "MAX_SAFE_NUMBER"

const MaxJSnum = Number.MAX_SAFE_INTEGER
console.log(MaxJSnum);
// console.log(MaxJSnum+9);

//* using BigInt:
const normalNum = 2333444523453546
const bigNumbers = BigInt("554354222332324324354676577565467")
console.log(bigNumbers);

//! 2. Nullish Coalescing Operator = ??
//? Use: its only consider "Null" and "Undefined" false...
//? if it is "0" than its not false its considered as a true if used "??"

const num = 0;
const checkTrueFalse = num || 10;
const checkMain = num ?? 10; 

console.log(checkTrueFalse);
console.log(checkMain);

//! Optional Chaining Operator (?.)

 
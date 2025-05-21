//! Topics:
//? String Padding
//? object.values() : already checked
//? object.entries() : already checked
//? Trailing commas in function parameter lists and calls
//? Async Functions : in Future for weather application

//! 1. String Padding:
//* PadStart : addeding the Space from the First...

const CompanyName = "CodeWithUS"
const paddingStart = CompanyName.padStart(15);

console.log(paddingStart);
console.log(paddingStart.length);

//* PadEnd : addeding the Space from the Last...

// const PadEnd = CompanyName.padEnd(15);
const PadEnd = CompanyName.padEnd(15, "@")
console.log(`${CompanyName.padStart(15)} ${CompanyName.padEnd(15)}`);

//! 2. Trailing commas :


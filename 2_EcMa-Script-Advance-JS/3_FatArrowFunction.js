//! the Fat Arrow function is using for declare function without "Function" Key word

// const Sum = (a,b)=>{
//         return a+b;
// }
// console.log(Sum(10,89));

// const Sum = (a,b)=>{
//     const Result = `the sum is = ${a+b}`;
//     return Result
// }
// console.log(Sum(10,89));

// function Sum(a,b){
//     return a+b
// }

// let Result = Sum(4,6)
// console.log(Result);

// const Sum = (a, b) => { console.log(`the sum is = ${a + b}`); }
// Sum(10, 89);

// const Sum = (a, b) => `the sum is = ${a + b}`;
// console.log(Sum(10, 89));

const Sum = (a) => `the sum is = ${a * a}`;
console.log(Sum(15));

const Para = ()=> console.log(`Paragraph from Fat Arrow function`);
Para()



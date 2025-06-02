//! Topics...
//? 1. Rest Operator
//? 2. Spread Operator

//? 1. Spread Operator :
// const numbers = [1, 2, 3, 4, 5];
// [first, second, ...others] = numbers

// console.log(others); // 3,4,5
// console.log(numbers); // full data

//? Other Example :

// const num1 = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => { a + b + c + d + e }
// const sumOfNum = sum(...num1)

// console.log(sumOfNum);

//! Object and Rest operator

const StudentData = {
    age: 20,
    Name: "Sukan",
    isStudent: true
}

const { age, ...others } = StudentData
console.log(others);
console.log(StudentData);
console.log(age );

//! Object with Spread Operator :

const Obj1 = { a: 10, b: 20, c: 30 };
const Obj2 = { c: 40, d: 50 };

const MergeData = { ...Obj1, ...Obj2 }

console.log(MergeData);
//? Here what happned that the value of C is over written after OBJ 2 data is called it mean C:30 is goes to the backsite and stands in-place of C:40

console.log(MergeData)
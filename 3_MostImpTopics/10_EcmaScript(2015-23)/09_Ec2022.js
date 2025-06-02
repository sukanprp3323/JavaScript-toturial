//! 1. at.
//? Array.at() using for get any number from any index from backward and forward both sides

const numArr = [1, 2, 3, 4, 5, 6, 7]
// const oldMethod = numArr[numArr.length-1] //* Old method

const newMethod = numArr.at(-2) //*from backward

console.log(newMethod);

//! Object.HasOwn()
//* using for check any property is present or not into any object

const Book = {
    name: "world best JS course",
    author: "Thapa sir"
}

console.log(Book.hasOwnProperty("name")); //True
console.log(Book.hasOwnProperty("price")); //False

//* New method

console.log(Object.hasOwn(Book,"name"));


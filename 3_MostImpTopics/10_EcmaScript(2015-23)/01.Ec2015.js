//* object update :

// const fName = "Sukan"
// const age = 21

// const person = { name: name, age: age } //? this is Old method // 
// const person = { fName, age } //? this is New update //
// console.log(person);

//* Destructuring an Array :
//? Desturcturing is the process which helps for inserting the values  of array in another variable easily

//! 1. exatracting specific elements:

// const Arr1 = [10, 20, 30]

// const firstElm = Arr1[0]; //? this is old method //
//?============================================================

// const [first, second, third] = Arr1

// console.log(firstElm); //? Old method
// console.log(first);  //?New method
// console.log(second);
// console.log(third);
//? =============================================================================
//! 2. ignoring the Elements :

// const [, , third] = Arr1

// console.log(third);

//? =============================================================================
//! 3. InterView Questions
//* write the program which swap 2 variables without using 3rd variable
// asume : {a = 30,b = 10}

// let a = 10;
// let b = 30;

// let c = b // c = 30;
// b = a // b = 10
// a = c // a = 30

// console.log(a, b);

//? use Ecma Script updated method...

// let a = 10;
// let b = 30;

//* using destructuring 

// [a , b] = [b , a]

// console.log(a,b);

//? =============================================================================
//! Extracting properties: (traditional way)
const user = { Fname: "sukan", age: 30 }
// console.log(user.name); //* old method

//? Ecma script method:

// const { Fname, age } = user

// console.log(Fname, age); //* New method

//? =============================================================================

//! Renaming the Properties:
//* using for renaming the properties of keys.

const { Fname: FullName, age } = user
console.log(FullName);
//? =============================================================================

//! Rest Parameter...
//* normal way of writing paramter
// const Sum =(a,b,c,d)=>{
//     return a+b+c+d
// }
// console.log(Sum(10,20,30,40)); //*Normal way


//! Unique Way using Reduce :
const Sum = (...number) => {
    console.log(typeof (number))

    return number.reduce((Accum, curElem) => (
        Accum + curElem
    ), 0)
}

console.log(Sum(10, 20, 504, 504, 605, 40))
//? =============================================================================

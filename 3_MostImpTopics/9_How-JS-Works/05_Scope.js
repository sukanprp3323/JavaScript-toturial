//! 1. Lexical scoping
//? means where the variable written and where it can be called

// function outer() {

//     const name = "sukan";

//     function inner() {
//         console.log(name); //Accessing name because it is in Outer()
//     }

//     inner()
// }

// outer()

//! 2. Scope Chaining:
//? check any variable step by step from another functions like if not found than check upper function , still not than checks from global

let x = "Global"; // call when outer and  inner both won't found

function outer() {
    let x = "outer scope"  // call when inner scope won't found

    function inner() {
        let x = "inner scope" //call when inner scope found
        console.log(x);
    }

    inner();
}

outer()

//! 3. Global Variable vs Local variable

//? Global variable : means every function can use that variable

//? local Variable : means in which function the variable created only in that varaible the will be called or workd... not work out of the function 



let GlobalVariable = "I am a Global variable, everyone can use me"

function sukan(){
    const localVariable = "this is the local variable";
}

console.log(localVariable); // error because cant access it out of function


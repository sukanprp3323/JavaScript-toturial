
//! = This is not hoisting...
// var myVar = `100 num`;
// function greet(){
//     console.log("i am still learning js after completed almost JS but still i have to complete this cause i will do It");
// }

// console.log(myVar);
// console.log(greet());

//! =  Yes, This Is : Hoisting only work in Var not in let/Const
//! also Not working in Fat Arrow function 

//? hoisting is the method where the variable and functions declarations are moved on Top before code execution...

//? same goes to here variable "myVar" and function are moved on Top ... it means

//* var myVar; undefined
//* function greet(){} = (direclty give reference) so it works befoere the definat
 

console.log(myVar);
greet();

var myVar = `100 num`;
function greet(){
    console.log("i am still learning js after completed almost JS but still i have to complete this cause i will do It");
}
//! First class Functions = concept

function sayHello(name) {
    return `hello, ${name} !!!`
}

let assignToVar = sayHello;

console.log(assignToVar("sukan"));



//! Higher Order Function:
//* this means function which taking any function as an argument in its parameter called called Higher Order function

//! CallBack Function:
//* this means a function who passed in another function as an argument

//? Use Of BOth in single example

function normalFun(name,greetUser){
    console.log(`Received input: ${name}`);
    greetUser(name)
}

function greetUser(name){
    console.log(`hello ${name}`);
}

normalFun("sukan",greetUser)

// normalFun("sukan")
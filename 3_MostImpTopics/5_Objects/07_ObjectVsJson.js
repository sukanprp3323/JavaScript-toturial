//! Object vs JSON:

//? 1. Object

const myData = {
    Id: 2,
    Pname: "Mobile",
    isStudent: true,
    greeting: function () { //! greeting is a Variable and this is an anonymous function without Name
        return "welcome to Object";
    },
}

console.log(myData);
console.log(myData.greeting());

// console.log(JSON.stringify(myData))
let JsonData = JSON.stringify(myData)
console.log(JsonData);

let StringToObj = JSON.parse(JsonData)
console.log(StringToObj);
const product = {
    id:1,
    name:"laptop",
    category:"computer",
    brand:"Asus",
    price:45000,
    stock: 50,
    description:"best ever laptop for coding and devloping",
}


//! 1. Object.keys():
//? Gives All keys of an Object...

let allKeys = Object.keys(product)
console.log(allKeys);

//! 2. Object.values():
//? Gives all values of all Keys 

let allVales = Object.values(product)
console.log(allVales);

//! 3. Object.entries():
//? make all key value pair into an Array 

let makeArray = Object.entries(product)
console.log(makeArray);

//! 4. hasownproperty():
//? very simple just find the property from any Object

let hasOwnProperty = product.hasOwnProperty("name");
let hasOwnProperty1 = product.hasOwnProperty("age");
console.log(hasOwnProperty);
console.log(hasOwnProperty1);
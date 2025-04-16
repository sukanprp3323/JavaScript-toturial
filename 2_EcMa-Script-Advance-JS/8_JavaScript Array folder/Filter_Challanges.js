//!1xt. so the Challenge is Remove 6 from the Cart.

// Here user wants to delete 6 from the cart
// let Value = 6;
// let number = [1,2,3,4,5,6,7,6,8,6,9];

// let RemoveFromCart = number.filter((curElem)=>{
//      return curElem!==Value //*here we want to return the values which are not same as 6
// },);

// console.log(RemoveFromCart)

//!2nd. write program for a function who uses filter method and return only Product Name with a price less than or equal too 500.
//create an Object for products and Price
// let Products = [
//     { Name: "Laptop", Price: 12000 },
//     { Name: "Phone", Price: 2000 },
//     { Name: "tablet", Price: 500 },
//     { Name: "SmartWatch", Price: 150 },
// ]
//  let Result = Products.filter((curElem)=>{
//     return curElem.Price<=500
//  })
// console.log(Result);

//!3rd. Find  Unique Values using Filter
 
const number = [1,2,3,5,6,5,3];

let UniqueValues = number.filter((curElem,index,Arr)=>{
    // console.log(Arr)
    console.log(Arr.indexOf(curElem)) 
}) 
console.log(UniqueValues);

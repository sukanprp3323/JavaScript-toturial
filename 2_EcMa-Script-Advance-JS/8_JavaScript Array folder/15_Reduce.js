//! Reduce() is using for calculates total prices in shopping Cart 
let Price = [100, 200, 300, 400, 500]
let totalPrice = Price.reduce((Accum, curElem) => {
    return Accum + curElem
}, 0)
console.log(totalPrice);
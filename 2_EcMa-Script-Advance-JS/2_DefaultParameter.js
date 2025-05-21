//! Default parameter means Default Value to Parameter

function Sum(a=10,b=33){ //* Here 10 is default value of "A" and 33 is Default value of "B"
    return a+b;
}
let Total = Sum()
// console.log(Sum(4))
// console.log(Sum()) //*Calling Function without any parameter will be using Default Parameter
console.log(`Default Parameter = ${Total}`)

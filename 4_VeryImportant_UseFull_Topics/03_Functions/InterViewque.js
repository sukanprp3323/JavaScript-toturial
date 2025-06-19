//! Write a function to perform mathematical operation using callback functions and two variables in JavaScript

const mathOperation = (x, y, Operaton) => {
    return Operaton(x, y)
}

const add = (x, y) => {
    return x + y
}

const minus = (x, y) => {
    return x - y
}

const multiply = (x, y) => {
    return x * y
}

const divison = (x, y) => {
    return x / y
}

console.log(mathOperation(10, 40, add))
console.log(mathOperation(10, 40, minus))
console.log(mathOperation(10, 40, multiply))
console.log(mathOperation(10, 40, divison))
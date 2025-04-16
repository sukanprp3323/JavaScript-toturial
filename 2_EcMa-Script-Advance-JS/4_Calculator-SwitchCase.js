//! Using Normal Function :- 
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+": return num1 + num2;
//             break;

//         case "-": return num1 - num2;
//             break;

//         case "/":
//             if (num2 === 0) {
//                 return "Sorry you can't type 0"
//             } else {
//                 return num1 / num2;
//                 break;
//             }


//         case "*": return num1 * num2;
//             break;

//         default: return "sorry no operator found"
//     }
// }

// console.log(calculator(7770,0, "*"))

//* Using Fat Arrow Function :-

let calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+": return num1 + num2;
            break;

        case "-": return num1 - num2;
            break;

        case "/":
            if (num2 === 0) {
                return "Sorry you can't type 0"
            } else {
                return num1 / num2;
                break;
            }


        case "*": return num1 * num2;
            break;

        default: return "sorry no operator found"
    }
}

console.log(calculator(7770, 40, "*"))

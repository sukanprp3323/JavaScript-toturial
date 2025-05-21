let str = "hello world"
console.log(str)

//!  without using function :- 
// let mainString = "hello world";

// let Reverse = "";
//  for(let Char = mainString.length-1; Char >= 0; Char--){
//     debugger;
//     Reverse = Reverse + mainString[Char];
// }
// console.log(Reverse)
//! Using Function for Reverse the String:- 
let isReverse = (mainString) => {
    let Reverse = "";
    for (let Char = mainString.length - 1; Char >= 0; Char--) {
        debugger;
        Reverse = Reverse + mainString[Char];
    }
    return Reverse
}
console.log(isReverse("hello, lets Reverse this String"))
//! Let :-
// let FName = "Sukan";
// console.log(FName) 

//* Can Not Call the variable before initialization 
// console.log(Surname)
// let Surname = "Prajapati"

//! Const :-
//* Const means Constant value... 
//* Can not change the variable's Value after initialization\

//* you can change var/Let variable Value... 
// var VarValue = "Var Variable Value";
// VarValue = "Changed Value from Var variable"
// console.log(VarValue)

let LetValue = "Let Variable Value";
// LetValue = "Changed Value from Let Variable";
// console.log(LetValue)

//* You Cant Change the Value Of Constant Variable 
// const ConstValue = "Sukan";
// ConstValue = "Prajapati";
// console.log(ConstValue);

//! Let-Const example:

// var Name = "Sukan"

// if(true){
//     Name = "Prajapati"
//     console.log(Name)
// }
//  Name = "JavaScript Course";
//  console.log(Name);var Name = "Sukan"
//* Using Constant for changing the Value of Variable.

// const Name = "Sukan"
// if(true){
//     Name = "Prajapati"
//     console.log(Name)
// }
//  Name = "JavaScript Course";
//  console.log(Name);

//* the Constant and Let are Declare Variable into Block Scope:
//* Let
if(true){
    let Name = "Sukan"
    console.log(Name) 
}
console.log(Name)

//* Const
if(true){
    const Name = "Sukan"
    console.log(Name) 
}
console.log(Name);
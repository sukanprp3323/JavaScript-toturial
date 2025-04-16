//! Splice is Using for Remove and Add element from anywhere into Array.
//? Syntax --> Persons.Splice(Start,DeleteCount,item1,item2...)
const Fruits = ["Apple","orange","banana","Mango"]
Fruits.splice(1,2,"watermelon")
        //    ^ ^           ^
        //start-deleteCount-insert value  

console.log(Fruits)
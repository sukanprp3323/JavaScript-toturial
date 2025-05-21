//! in Object if use "This" than it refers the current object where the THIS keyword is written

//! "THIS" is a global object like window object  
function thiskeyword() {
    console.log(this);
}

thiskeyword()

//! using "THIS" into function in Object

let obj = {
    name: "sukan prajapati",
    greet: function () {
        console.log(this);
    }
}

obj.greet(); // gives whole object at once becasue This is Global object

//! use Mathod instead of function
//? a Function without name is known as anynoumus function in Object also known as method 
let obj1 = {
    name: "sukan prajapti",
    greet(){
        console.log(this);
    }
}

obj1.greet()

//! lets Use arrow function:

    let obj2 = {
        name:"sukan prajapati",
        greet: ()=>{
            console.log(this);
        }
    }

    obj2.greet();

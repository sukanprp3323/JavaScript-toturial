//! Here we show how can we add data in object or modify/update data into object

//? Lets adding the another key value pair [ Job: web dev ]
const Product1 = {
    Id: 2,
    Age: 25,
    Pname: "Mobile",
    isStudent:true,
    greeting : function (){
        console.log("welcome to Object");
    },
}

console.log(Product1);


Product1.Job = "Web devloper";
Product1['Age'] = 34,
Product1.Age = 20;

console.log(Product1);


//! Accessing the Methods/functions from Objects

Product1.greeting();
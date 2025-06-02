//! here we so "How can we access the properties from the Objects"
const Product1 = {
    Id: 2,
    Pname: "Mobile",
    "is'Student":true,
    greeting : function greeting(){
        console.log("welcome to Object");
    },
}

console.log(Product1.Id);
console.log(Product1.Pname);
console.log(Product1["is'Student"]);

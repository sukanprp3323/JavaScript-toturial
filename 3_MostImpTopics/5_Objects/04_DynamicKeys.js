//! Dynamic keys are using getting different data from same properties
//? Setting Dynamic value for ID

// let Id = "StudentID";
let Id = "CollageID";


const Student1 = {
    Id: "A7082521",
    Pname: "Sukan",
    isStudent:true,
    greeting : function (){
        return `hey, my ${Id} is ${Student1.Id} and my name is ${Student1.Pname}`
    },
}

console.log(Student1.greeting());


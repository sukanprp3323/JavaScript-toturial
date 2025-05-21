//! Many ways to create Object
//? [Key:value]

const Product = {
    Id: 1,
    Pname: "laptop",
}


//! In Object a function is known as "Method"

const Product1 = {
    Id: 2,
    Pname: "Mobile",
    isStudent: true,
    greeting: function () { //! greeting is a Variable and this is an anonymous function without Name
        console.log("welcome to Object");
    },
}

const Product3 = {
    Id: 3,
    Pname: "TV",
    "is'Student": false,
    greeting: function () {
        console.log("welcome to Object");
    },
}

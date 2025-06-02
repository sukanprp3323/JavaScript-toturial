//! 1. add key and Value using function into object

// let StudentData = {
//     sName: "Sukan",
//     Age: 20,
//     grades: {
//         math: 56,
//         science: 80,
//         history: 89,
//     },
// }

//* i want to add another subject and Grade

// let addStudentGrade = (StudentData, subject, marks) => {
//     console.log(StudentData.grades[subject] = marks);

//     if (!StudentData.grades) {
//         StudentData.grades = {};
//     }

//     return (StudentData.grades[subject] = marks)
// }

// addStudentGrade(StudentData, "computer", 56)

// console.log(StudentData);


//! 2. check 2 objects have same properties and values or not simply compare them

const areOBjequal = (obj1, obj2) => {
    // if (obj1.length != obj2.length) {
    //     return false
    // }

    let o1 = Object.keys(obj1) // it becomes an Array after this
    let o2 = Object.keys(obj2) // it becomes an Array after this

    if (o1.length != o2.length) {
        console.log("length are not same");
        return false
    }
    // else{
    //     return true
    // }

    for (let Key in obj1) {
        // console.log(Key);

        console.log(obj1[Key]);

        if (obj1[Key] !== obj2[Key]) {
            return false
        }
    }
    return true

    // console.log(o1);
    // console.log(o2);

}

let obj1 = { name: "Alice", age: 26, City: "newyork" }
let obj2 = { name: "Alice", age: 13, City: "newyork" }
let obj3 = { name: "bob", age: 30, City: "san Francisco" }

console.log(areOBjequal(obj1, obj2));


// console.log(obj1,obj2);
// console.log(obj1,obj3);


//! transform Array object into Object:

// ? Like this :
//?   {
//? '1':{id: 1, name: 'alice'},
//? '2':{id: 2, name: 'bob'},
//? }

let ArrayOFobj = [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
    { id: 3, name: "Charlie" },
]
let ArryToObj = (arr)=>{
    // console.log(arr);
    // console.log(arr[2].id);

    let EmptyObject = {}

    for(let key of arr){
        // console.log(key);
        console.log(key.id, key);
       EmptyObject[key.id] = key;
        
    }
    return EmptyObject;
}

console.log(ArryToObj(ArrayOFobj));

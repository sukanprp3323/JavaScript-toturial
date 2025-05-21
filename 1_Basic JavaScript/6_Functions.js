//? Functions 
// 3 student at the same time wants to find the sum of two Numbers

// //* student 1 Marks 
// var a = 10;
// var b = 15;
// var sum1 = a+b
// console.log(sum1)

// //* student 2 Marks
// var a = 15;
// var b = 15;
// var sum2 = a+b
// console.log(sum2)

// //*student 3 Marks
// var a = 25;
// var b = 30;
// var sum3 = a+b
// console.log(a+b) //! Making Reusable Using Function 


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,19)); 

//! Write function to find sum of two Numbers:-

// function Sum(){
//     var a = 19
//         b = 14
//         console.log(a+b);
// }
// Sum()

//! making a One common function for Different Different Names:

// function Name(FName){
//     console.log("Hello " + FName + ", Welcome Back to JS Course")
// }

// Name("Sukan")
// Name("Vedant")

//! Passing Function as a Variable:

// var Result = function Sum(a,b){
//     console.log(a+b);
    
// } 

// Result(5,7)

//! Anonymous Function:
//? Function without Name is Known as Anonymous Function

// var Result = function(a,b){
//     console.log(a+b)
// }

// Result(56,55)


// function Sum(a,b){
    // console.log(a+b)
//     return a+b;
// }

// console.log(Sum(10,30));
// var Result = Sum(30,40)

// console.log(Result);

//! IEFE - Immediately Invoked Function Expression :-
//? This type of functions are using for calling the function just after Define and Realoading the page

(function(a,b){
    console.log(a+b)
})(10,50)
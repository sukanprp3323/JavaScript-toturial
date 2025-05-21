//? While Loop :-
//! Print 1-10 using while loop;

// var i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//? Do-While Loop :-

// var i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//? For Loop :-

// for(var i = 1;i<=10;i++){
//     console.log(i)    
// }

//! Create Table of 5,8,9,12,15

// for(var num = 1;num<=10;num++){
//     console.log(`5 * ${num} = ${num*5}`)
// }

// for(var num = 1;num<=10;num++){
//     console.log(`8 * ${num} = ${num*8}`)
// }

// for(var num = 1;num<= 10;num++){
//     console.log(`9 * ${num} = ${num*9}`)
// }

// for(var num = 1;num<=10;num++){
//     console.log(`12 * ${num} = ${num*12}`);
// }
// for(var num = 1;num<=10;num++){
//     console.log(`15 * ${num} = ${num*15}`);
// }

//! Enter positive Number
// var userInput;
// var positiveNumber;

// do{
//     userInput = prompt("Enter a Positive Number")
//     positiveNumber = parseFloat(userInput)
// }while(isNaN(positiveNumber) || positiveNumber < 0)
// console.log("The you have written is correct" , positiveNumber)

//! sum of 1-10 numbers

// var sum = 0;
// for(var num = 1;num<=10;num++){
//     var sum = sum+num
// }
// console.log(sum)

//! Prime Number

// var num = 13;
// var isPrime = true

// for(var i = 2;i<num;i++){
//     if(num%i===0){
//         isPrime = false
//     }
// }

// if(isPrime){
//     console.log(`${num} is a Prime`)
// }else{
//     console.log(`${num} is Not a Prime Number`)
// }

//! Leap Year Checking 

// var LeapYear = 2005;
// if ((LeapYear % 4 === 0 && LeapYear % 100 !== 0) || (LeapYear % 400 === 0)){
//     console.log(`${LeapYear} is LeapYear`);
// }else{
//     console.log(`${LeapYear} is Not LeapYear`);
// }

//! Star Pattern Using Loop - 

for(var i = 0;i<=5;i++){
    // debugger;
    var Pattern = " "
    for(var j = 0;j<=i;j++){
        Pattern = Pattern+" *"
    }
    console.log(Pattern)
}
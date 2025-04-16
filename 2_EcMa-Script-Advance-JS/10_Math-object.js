//* it using for working with the numbers and used 3 function 
//! 1. Math.Round() : using for remove the point and give the number
// console.log(Math.round(4.7)) //5
// console.log(Math.round(4.4)) //4

//! 2. Math.Floor(): it gives an output which the number is before the point(.)
// console.log(Math.floor(4.9)) // output 4
// console.log(Math.floor(4.1)) // output 4  

//! 3. Math.Ceil(): gives the out put which is after the number no matter its greater than .5 or less then .5
// console.log(Math.ceil(5.7)); //output 6
// console.log(Math.ceil(5.1)); // still the output is 6

//! 4. Math.abs(): find that the number is how far form 0
// console.log(Math.abs(4)); // 4 is 4 numbers far than 0 
// console.log(Math.abs(-2200)) // is 2200 times far than 0 no matter its always gives an positive output 


//todo : Rounds gives the nearest integer (gives the nearest num of .5)
//todo : Floor gives the actual num and remove the point (going down)
//todo : Ceil gives the next number  (going up)

//! 5. Math.pow(): gives the power value
// console.log(Math.pow(5,3)); //5 x 5 x 5 = [125]
// console.log(Math.pow(5,4)); //5 x 5 x 5 x 5 = [625]

//! 6/ Math.sqrt(): gives the square root of given value
// console.log(Math.sqrt(25)); //output 5
// console.log(Math.sqrt(100)); //output 10

//! Math.Random (): using for print random number between 0-9 into decimal numbers
console.log(Math.random());
console.log((Math.random()*100).toFixed(3)); //toFixed using for getting how many numbers after point
console.log(Math.floor(Math.random()*100)); //gives the output and remove decimal numbers
//! Multiply each element with 2 using Map function:
let myNum = [2,4,6,7,8]
 myNum.forEach((curNum)=>{
    console.log(curNum*2)
    //using for performs an Operations on Each element 
 })

 let Multiply = myNum.map((curElem)=>{
    return curElem*2
 })
console.log(Multiply)
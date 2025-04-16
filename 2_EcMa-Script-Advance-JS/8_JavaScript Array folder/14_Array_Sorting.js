//! Sorting is using for sort the Array Values in ascending and descending order
// let number = [1,4,5,3,9,2,7]
// number.sort()
// console.log(number)

//! Descending Order
//* Formula = if(a>b) return 1
//* Formula = if(b>1) return -1

let number = [1,4,5,3,9,2,7]
number.sort((a,b)=>{
    if (a>b) return -1
    if (b>a) return 1
})
console.log(number)
//! 1. getFullYear() : it gives current year
const curYear = new Date().getFullYear()
console.log(curYear);

//! 2. getMonth() : it gives current Month
const curMonth = new Date().getMonth()
console.log(curMonth); //returned 2 becauses starts from 0 in index and End to 11 for 12

//! 3. getDate(): it gives current Date
const curDate = new Date().getDate()
console.log(curDate);

//! 4. getDay(): today's Day...
const Today = new Date().getDay()
console.log(Today); //2 = tuesday, starting from 0 = sunday 1 = monday...

//! 5. getTime(): current Time
const curTime = new Date().getTime()
console.log(curTime);


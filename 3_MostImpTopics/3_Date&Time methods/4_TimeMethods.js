//! getTime Methods: use of this perticular getTime it gives current time inplace of Date into getTime

//! 1.

const curTime = new Date()

const Hours = curTime.getHours();
console.log(Hours);

const minutes = curTime.getMinutes();
console.log(minutes);

const seconds = curTime.getSeconds();
console.log(seconds);

const time = curTime.getTime();
console.log(time);

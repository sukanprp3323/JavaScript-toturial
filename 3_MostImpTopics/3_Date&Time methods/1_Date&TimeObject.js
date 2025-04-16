//! 1. new Date() : returns current Date.

// const NewDate = new Date()
// console.log(NewDate);

//! 2. new Date(Date String) : to convert String into Date

// const DateString = "2025-03-21T13:44:10.978Z";
// const DateFromString = new Date(DateString)
// console.log(DateFromString);

//! 3. new Date(year,month) : check month's end date

// const YearMonth = new Date(2025,2) // 2nd Value is month as per INDEX num
// console.log(YearMonth);

//! 4. new Date(year,month,Day) : check date/passing date
//3rd value is a Date with index number means 22 is date 21
// const checkDay = new Date(2025,2,22); // use INDEX numbers. 
// console.log(checkDay);

//! 5. new Date(year,month,day,hours) : check Hours/passing Hours
// const passHours = new Date(2025,2,22,7) // 4th value is a Hours
// console.log(passHours);

//! 6. new Date(year,month,day,hours,minutes) : check current minutes in Hours
// const passMinutes = new Date(2025,2,22,7,1) // 5th value is a minutes
// console.log(passMinutes);

//! 7. new Date(year,month,day,hours,minutes,Second) : seconds
// const passSeconds = new Date(2025,2,22,7,1,10) // 6th value is a seconds
// console.log(passSeconds);

//! 8. new Date(Miliseconds) : check  MILISECONDS

// const checkMiliseconds = new Date().getMilliseconds()
// console.log(checkMiliseconds);


//! 9. DateString:
    // const DateString = new Date("2025-3-25")
    // console.log(DateString);


//! 10. ToLocalString()
const curtime = new Date()
console.log(curtime);
const Time = curtime.toLocaleString()
const Time1 = curtime.toLocaleDateString()
const Time2 = curtime.toLocaleTimeString()
console.log(Time);
console.log(Time1);
console.log(Time2);


//! 11. Now:
// console.log(Date.now());


//! 1. write function for increase Date Number

// i want increase 10 days in this date like (2025-03-05)

const curDate = new Date("2025-03-26")

let addDaysToDate = (curDate, addDay) => {
    // console.log(curDate);
    // console.log(curDate.getDate());
    // console.log(curDate.setDate(curDate.getDate()+ addDay)); //return Miliseconds
    // console.log(new Date(1743811200000)); // finding day from MILISECONDS
    let updatedDate = curDate.setDate(curDate.getDate() + addDay)
    return new Date(updatedDate)
}

const newDate = addDaysToDate(curDate, 10)
console.log(newDate.toLocaleDateString());

// console.log(newDate);


// console.log(curDate);


//! 2. find difference between 2 dates

const date1 = new Date("2025-03-26")
const date2 = new Date("2025-04-10")

let getDayDifference = (d1, d2) => {
    // console.log(d2-d1);
    let oneDay = 24 * 60 * 60 * 1000 // perticular single Day MILISECONDS = 86400000
    // console.log(oneDay);
    let Difference = d2 - d1
    // console.log(Difference);

    return Math.round(Difference / oneDay)
    // console.log(new Date(1296000000).getDate());
}

console.log(getDayDifference(date1, date2));

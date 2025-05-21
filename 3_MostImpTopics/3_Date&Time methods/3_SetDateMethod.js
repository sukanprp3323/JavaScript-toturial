//! set method used for setting the time month date year etc... to any current time month Date year etc...

const date = new Date();

//! 1. setYear: set different year insteed of current YEAR.
console.log(date);
date.setFullYear(2026); // here i set 2026 insteed of 2025
console.log(date);

//! 2. setMonth: set different Month insteed of current MONTH.
console.log(date);
date.setMonth(3) //April
console.log(date);

//! 3. setDate: set different date insteed of current Date
console.log(date);
date.setDate(30);
console.log(date);
//! Data modeling means a showing properties to Real world entities 

let Car = {
    brand: "toyota",
    model: "Camry",
    Year: 2022,
    start: function () {
        return "Engine started"
    }
}

console.log(Car);
console.log(Car.start());


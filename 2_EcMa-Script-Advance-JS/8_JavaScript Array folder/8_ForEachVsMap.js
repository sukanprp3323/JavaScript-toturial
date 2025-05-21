//! basically the main difference in ForEach and Map is we can use Map into variable but can't Assign Variable to For Each :

//! ForEach():-

let Fruits = ["Apple", "Banana", "Mango"]
Fruits.forEach((curValue, index, Arr) => {
    // console.log(`${curValue} ${index} ${Arr} `)
    console.log(` i love to eat ${curValue} `)
})


//! Map()

let myMapArr = Fruits.map((curValue, index, Arr) => {
    // console.log(` ${curValue} ${index} ${Arr} `)
    return ` i love to eat ${curValue} `
})
console.log(myMapArr)
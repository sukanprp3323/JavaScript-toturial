//! the Syntax for Map and ForEach are totally same but can't use forEach into Variable 
let Fruits = ["Mango", "Banana", "Apple", "Watermelon"]

Fruits.map((curElem, index, arr) => {
    console.log(curElem)

    console.log(index);

    console.log(arr);
     
    console.log(curElem, index, Fruits);

    console.log(`${curElem}${index}${Fruits}`);

}); 
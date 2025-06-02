//! ClearInterVal:
//? ClearInterVal is using for stop the setInterval function or block

//todo:  For better understanding of clearInterval we have a Challange so do this... Print "hello sukan" until 5000 miliseconds

function printUntil5sec() {
    console.log("hello sukan");
}
printUntil5sec();
let interval = setInterval(printUntil5sec, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 5000)
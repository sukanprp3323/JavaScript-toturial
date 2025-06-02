//! ClearTimeOut: 
//? clearTimeOut is using for stop the set time out function

function mySetTimeOut(){
    console.log("display after every 2 seconds");
}

let stopTimeOut = setTimeout(mySetTimeOut,2000)

clearTimeout(stopTimeOut)
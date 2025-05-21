//! setInterval():
// ? setInterval is used for run any perticular code or function after some delay or time continusly without stopping this is the main diffrence...

function mySetInterval(){
    console.log("continusly run this console using set Interval after every 1000 mili seconds");
}

setInterval(mySetInterval,1000)

//Todo: with Parameter: 

function mySetInterval1(x) {
    console.log("continusly run this console using set Interval after every 3000 mili seconds", x);
}

setInterval(() => {
    mySetInterval1(10)
},2000)
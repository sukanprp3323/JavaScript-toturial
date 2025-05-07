//! Synchronous: 
//* works like interpreter and single Threaded means
//? Ex: suppose there are 3 function Fun1, Fun2, Fun3 = they are running after Each and other and it Fun1 work is 2 hours and the work of Fun2 is 2 minutes still no matter Fun2's work will be run after 2 hours...

// const fun2 = () => {
//     console.log("Fun2 Called");
// }

// const fun1 = ()=>{
//     console.log("Fun1 called First");
//     fun2()
//     console.log("end of Fun1");
// }

// fun1();

//! Asynchronous:
//? same Example but the difference is there is no wait for Fun2,fun3 for there work... there work will be done with same time when Fun1 called

const fun2 = () => {
    setTimeout(() => {
        console.log("after 2 second");
    }, 2000)
}

const fun1 = () => {
    console.log("fun1 called");
    fun2()
    console.log("fun1 printed before fun2 ,because Fun2 is in TimeOut and into Web API");
}

fun1()

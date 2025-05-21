//! Call stack work on LIFO ( last in, first out)

const Fun1 = () => {
    console.log("fun1 printed");
    Fun2()
}

const Fun2 = () => {
    console.log("fun2 printed");
    setTimeout(()=>{
        console.log("going to Web API during setTimeOut seconds");
    },3000)
    Fun3();    
}

const Fun3 = () => {
    console.log("Final Fun3 printed");
}

Fun1()
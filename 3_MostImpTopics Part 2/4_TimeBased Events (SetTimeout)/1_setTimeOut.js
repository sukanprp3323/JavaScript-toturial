//! setTimeOut():
// ? setTimeOut is used for run any perticular code or function after some delay or time ...

function MysetTimeout() {
    console.log("show this function after 2000 mili seconds",);
}

setTimeout(MysetTimeout, 2000)

//todo:  with Parameter:
function MysetTimeout1(x) {
    console.log("show this function after 2000 mili seconds", x);
}

setTimeout(() => {
    MysetTimeout1(10)
}, 2000)

//=========================================================================
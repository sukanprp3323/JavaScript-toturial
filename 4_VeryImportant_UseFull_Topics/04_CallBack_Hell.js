//! Piramid of DOOM: 
//* Here we see CallBack hell known as Piramid Hell and you see the PiraMid made from this setTimeOut method     



const getStudentData = () => {
    setTimeout(() => {
        console.log("hello, My Name Is Sukan");
        setTimeout(() => {
            console.log("hello, I Am Learning JavaScript");
            setTimeout(() => {
                console.log("hello, I Am Learning ReactJs");
                setTimeout(() => {
                    console.log("hello, I Am Learning ReactJs");
                    setTimeout(() => {
                        console.log("hello, I Am Learning NodeJS");
                        setTimeout(() => {
                            console.log("hello, I Am Learning NextJS");
                            setTimeout(() => {
                                console.log("hello, I Am Learning NextJS");
                                setTimeout(() => {
                                    console.log("hello, I Am Learning NextJS");
                                    setTimeout(() => {
                                        console.log("hello, I Am Learning NextJS");
                                    }, 1000)  
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

getStudentData()
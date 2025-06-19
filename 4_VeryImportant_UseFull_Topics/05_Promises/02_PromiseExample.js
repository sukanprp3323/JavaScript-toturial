const studentName = "Sukan";

const enrollMentProcess = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSucessful = Math.floor(Math.random() * 100);

            if (isSucessful >= 33) {
                resolve(`Congratulation, Enrollment succesfull for ${studentName} with ${isSucessful} marks`)
            }
            else {
                reject(`Very Sorry but, Enrollment Failed for ${studentName} with only ${isSucessful} marks, please try again`)
            }
        }, 2000)
    })
}

enrollMentProcess(studentName)
    .then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("Enrollment Process Completed");
    })


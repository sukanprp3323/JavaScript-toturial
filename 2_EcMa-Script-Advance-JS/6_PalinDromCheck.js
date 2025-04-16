//! Create function for check a string is palindrome or not

let isPalindrome = (mainString) => {
    let Reverse = "";
    for (let Char = mainString.length - 1; Char >= 0; Char--) {
        Reverse = Reverse + mainString[Char];
    }
    
    if (mainString === Reverse) {
        return "this string is Known as Palindrome"
    } else {
        return "Normal String"
    }

    // return mainString===Reverse ? true : false;
}

console.log(isPalindrome("NAYAN"))
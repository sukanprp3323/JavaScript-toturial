//* 1. Write a code who Print letter A to Z in javaScript:
//? for write a-z need the character code of any letter 
// console.log("a".charCodeAt(0)) // character code of A is 97
// console.log("z".charCodeAt(0)) // character code of z is 122

//* for convert the CharCode into character :
//!  string.fromCharCode(char)

// for(let char = 97;char<=122;char++){
//         console.log(`${String.fromCharCode(char)} = ${char}`)
// }


//* 2. Check all Vowels are present in string or not? [a,e,i,o,u] 
//* if any one Vowel missing than its false so all Vowels are needed
//! find - A E I O U
const checkAllVowels = (text) => {
    let Vowels = "aeiou"
    for (let char of Vowels) {
        // console.log(char);
        // console.log(text.includes(char));
        if (!text.includes(char)) { //Not all Vowels are Present in this string so ges
            return false
        }
    }
    return true
}

console.log(checkAllVowels("JavaScript study"));


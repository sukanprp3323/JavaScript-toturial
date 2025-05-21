//! use for Searching into String using some methods.
//* 1. IndexOF():

// let Text = "Sukan Prajapati"
// let stringIndex = Text.indexOf(" ")
// console.log(stringIndex); output: 5 

// //? converting string into Array
// let StrintoArr = Array.from(Text)
// console.log(StrintoArr);

// let StrMap = StrintoArr.map((curElem,index)=>{
// return `${curElem} - ${index}`
// })
// console.log(StrMap);

//* 2. LastIndexOf(): checking the Index of second same element here searching "S"

// let text = "Sukan PrajapatiS"
// let lastIndex = text.lastIndexOf("S")
// console.log(lastIndex);

// let text = "Hello JavaScript, welcome to our worlds best JavaScript Course";
// let lastIndex = text.lastIndexOf("JavaScript") //Searching ForWard  ---------------->
// let lastIndex = text.lastIndexOf("JavaScript",40) //Searching Backward <------------------
// console.log(lastIndex);

//* Search(): using for searching the letters and return Index Number...Search has a Power that it can stop CaseSensitivity using "i" keyword
//? "i" keyword = caseSensitivity not works
//? "g" keyword = Global using for Searching all over string and giving the first index

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer"
// let Search = text.search(/javascript/) // -1 output here Case Sensitive
// let Search = text.search(/javaScript/g) // Global but CaseSensitive
// let Search = text.search(/javascript/i) // No CaseSensitive Easily works on any capital or small letters
// console.log(Search)

//* Match(): Match Returns an in-depth details in Array of the matched values or null if No matched item found.

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer, javaScript is my fev and i am trying every day to do my best in javaScript"
//  let result = text.match("javascript") //Case Sensitive so return Null
// let result = text.match("javaScript") //without "g" and "i" returns an first data of Searched element in Array
// let result = text.match(/javaScript/) // same with (/ /) Regular expression... gives an Array of searched Element...
// let result = text.match(/javaScript/g) //Global means caseSensitive and its return all the searched element from the Array
// let result = text.match(/javaScript/gi) // its "i" so easily detect all type of cases

// console.log(result);

//* MatchAll(): 
//!same to same as a Match() but its gives all over Searched element without using Global(g) or (i) it gives all data in array 

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer, javaScript is my fev and i am trying every day to do my best in javaScript";

// let result = text.matchAll("javascript")// empty iterator or object
// let result = text.matchAll("javaScript")
// console.log(...result); // used spread operator for find all matched element...

// for(item of result){
//     console.log(item[0]);
// }
// for(item of result){
//     console.log(item.index);
// }
// for (let { input } of result){
//     console.log(input);
// }

//* includes(): 
//!it Returns boolean value true or false if includes searched element found or not

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer, javaScript is my fev and i am trying every day to do my best in javaScript";

// let result = text.includes("java") //its true because small j
// let result = text.includes("Java") //its False because capital J
// let result = text.includes("Javasc") // false
// let result = text.includes("j") // true
// let result = text.includes("javaSc") // true
// console.log(result);

//* StartsWith():
//! Using for check the first element of a String and returns boolean value. and ignore all the words because only focus on first element same as the name like starts wit 

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer, javaScript is my fev and i am trying every day to do my best in javaScript";

// let result = text.startsWith("hello") //true
// let result = text.startsWith("Hello") //False because CaseSensitive
// let result = text.startsWith("welcome") //False because first word is "hello"
// 
// let result = text.startsWith("hello",0)
// let result = text.startsWith("come to",10) //true
// let result = text.startsWith("lcome to",10) //false

// console.log(result);

//* EndsWith():
//! Using for check the last element of a String and returns boolean value. and ignore all the words because only focus on last element same as the name like Ends With... 

// let text = "hello, welcome to best javaScript Course. i want to become javaScript developer, javaScript is my fev and i am trying every day to do my best in javaScript";

// let result = text.endsWith("hello") //false
// let result = text.endsWith("javaScript") //true
// console.log(result);

//* Slice():
//! use case of Slice is taking any part from any string and return that using index number

// let text = "hello, i am sukan and learning java Script"
// let result = text.slice(12) // single value means that take all the string from that index 12...
// let result = text.slice(12,21)
// let result = text.slice(-10) // starting from the end of the string when use (-) here start from the "t" end of the string
// console.log(result);

//* Substring():
//! the use case is same to same as slice but there is no CamelCase in substring()
//! syntax : text.substring()

// let text = "hello, i am sukan and learning java Script"
// let result = text.substring(12,21) //same syntax as slice and same result.
// let result = text.substring(-10) //here in substring its not possible and gives all string at once
// console.log(result);

//! Extracting string Characters(letters): get a single single letter using some methods
//*CharAt(): getting single letter using index numbers.
//*CharCodeAt(): for getting Character code 
//*at(): for getting all negative and positive index data 

//*CharAt()
// let text = "hello, i am sukan and learning java Script"
// let result = text.charAt(15)
// let result = text.charAt(-15) // gives an empty array
// console.log(result);

//* CharCodeAt():
// const text = "hello, i am sukan and learning java script"
// let result = text.charCodeAt(7)
// console.log(result) // the character code of index 7(i) is 105.

//* at():
// let text = "hello, i am sukan and learning java script"
// let result = text.at(7) // starting from front side
// let result = text.at(-9) //starting from backside
// console.log(result)

//! Replace the words... 
//* Replace(): using for replace single single words

// let text = "hello, i am sukan and learning java script"
// let result = text.replace("sukan","javaScript")
// let result = text.replace(/SUKAN/gi,"javaScript")
// console.log(result)  

//! toUpperCase() & toLowerCase()
//* use for convert upper and lowercases

// let text = "hello, I AM SukaN and LeaRning jAVa sCript"
// let result = text.toUpperCase()
// let result = text.toLowerCase()
// console.log(result);
 
//! trim():
//* using for remove the outside spaces of any string...

// let text =  "         hello, i am sukan and learning java script       "
// console.log(text);
// let result = text.trim()
// console.log(result);

//! Split()
//* using for split the value into array 
//* it convert the string into array

// let text = "sukan prajapati"
let text = "Apple,banana,mango"
// let result = text.split() //give one single array and only one index 0
// let result = text.split(",") // array of each element
// let result = text.split("") // array of each character when use empty string
let result = text.split(",").reverse().join() //reverse the array using split
                //  ^          ^        ^
                // to array  for Reverse  for array to string
console.log(result);
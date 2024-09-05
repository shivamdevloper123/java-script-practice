// PROBLEM 16 : Check if an array is sorted

// Wrong Method :
// let arr = [3,15,6,4,8];


// if (arr===sorted){
//     console.log('Array is Sorted')
//     }
//     else{
//         console.log('Array is Not Sorted')
//     }

// let sorted = arr.sort((a,b)=>a-b);
// console.log("shorted",sorted)

//   Right method

// let arr = [3, 15, 6, 4, 8];

// // Create a sorted copy of the array
// let sortedArr = [...arr].sort((x, y) => x - y);

// // Check if the original array is the same as the sorted copy
// if (arr === sortedArr) {
//     console.log('Array is Sorted');
// } else {
//     console.log('Array is not sorted');
// }

// PROBLEM 17 : Count the number of words in a string 

// let str = "i am a student"

// let count = str.split(" ").length;

// console.log(count);

//  PROBLEM 18 : Find the index of a specific element in an array 

// let arr = [3, 15, 6, 4, 8];

// console.log(arr.indexOf(15))


// PROBLEM 19 : Replace all occurrences of a substring in a string

// Using inbiuilt method

// let str = "The sky is blue. The ocean is blue.";
// let target = "blue";
// let replacement = "green";

// let newStr = str.replace(/blue/g, "green");
// console.log(newStr);  // Output: The sky is green. The ocean is green.


//  Without using inbuilt method

// function replaceSubstring(str, target, replacement) {
//     let result = '';
//     let i = 0;

//     while (i < str.length) {
//         // Check if the current part of the string matches the target substring
//         if (str.substr(i, target.length) === target) {
//             result += replacement;  // Add the replacement to the result
//             i += target.length;     // Move the index by the length of the target
//         } else {
//             result += str[i];       // Add the current character to the result
//             i++;                    // Move to the next character
//         }
//     }

//     return result;
// }

// let originalStr = "apple banana apple grape apple";
// let targetSubstring = "apple";
// let replacementSubstring = "orange";

// let newStr = replaceSubstring(originalStr, targetSubstring, replacementSubstring);
// console.log(newStr);  // Output: "orange banana orange grape orange"

// PROBLEM 20: Remove whitespace from the beginning and end of a string

//  using inbuilt method

// let str = "                      The sky is blue.         The ocean is blue.      ";
// console.log("before: ",str)


// // console.log(str.trim());


// console.log("after :",str.trim().split(/\s+/).join(' '))


//  Without using inbuilt method
let str = "                      The sky              is blue.          The ocean is blue.      ";
console.log("Before:", str);

// Remove leading, trailing, and extra spaces manually
let result = "";
let word = "";
let inWord = false;

for (let i = 0; i < str.length; i++) {
    // Skip leading spaces
    if (str[i] !== ' ') {
        // If character is not a space, add it to the word
        word += str[i];
        inWord = true;
    } else {
        // If we're in a word and encounter a space, add the word and a single space to result
        if (inWord) {
            result += word + ' ';
            word = ""; // Reset word
            inWord = false;
        }
    }
}

// Add the last word (if any) to the result
if (word !== "") {
    result += word;
}

// Remove trailing space
if (result[result.length - 1] === ' ') {
    result = result.slice(0, -1);
}

console.log("After:", result);






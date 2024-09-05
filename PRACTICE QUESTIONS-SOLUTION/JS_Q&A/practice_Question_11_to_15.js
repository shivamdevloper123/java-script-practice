// PROBLEM 11:Check if a string contains a specific substring 
// let str = "hello world"
// let substring = 'world'

// Method 1; includes method
// if (str.includes(substring)){
//     console.log('The substring is present in the string ');

// }
// else {
//      console.log('The substring is not present in the string ')
// }


// Method 2 ; indexOf method
// if (str.indexOf(substring)!==-1){
//     console.log('The substring is present in the string ');

// }
// else {
//      console.log('The substring is not present in the string ')
// }

// Method 3 ; test method
// let substring = /world/;

// if (substring.test(str)){
//     console.log('The substring is present in the string ');

// }
// else {
//      console.log('The substring is not present in the string ')
// }

// Method 4: without using methods
// function containsSubstring(str, substring) {
//     // Step 1: Get the lengths of both strings
//     let strLength = str.length;
//     let subLength = substring.length;

//     // Step 2: Loop through the main string
//     for (let i = 0; i <= strLength - subLength; i++) {
//         let found = true; // Assume we have found the substring

//         // Step 3: Check if the substring matches at the current position
//         for (let j = 0; j < subLength; j++) {
//             // Compare characters in `str` and `substring`
//             if (str[i + j] !== substring[j]) {
//                 found = false; // If any character doesn't match, set `found` to false
//                 break; // No need to check further characters for this position
//             }
//         }

//         // Step 4: If found is still true, return true because substring is found
//         if (found) {
//             return true;
//         }
//     }

//     // Step 5: If no match is found after looping through the string, return false
//     return false;
// }

// // Test the function
// let str = "Hello, world!";
// let substring = "world";
// let result = containsSubstring(str, substring);

// console.log("substring present in the string is "+ result); // Output: true

// PROBLEM 12:  Convert a string to lowercase

// Method1 : Using string method

// let string = "Hello World!";
// console.log(string.toLowerCase())


// Method1 :  without using string method 

// function toLowercase(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);

//         // Check if the character is an uppercase letter (A-Z)
//         if (charCode >= 65 && charCode <= 90) {
//             // Convert to lowercase by adding 32 to the char code
//             result += String.fromCharCode(charCode + 32);
//         } else {
//             // If it's not an uppercase letter, keep the character as is
//             result += str[i];
//         }

//     }

//     return result;
// }

// // Example usage
// let input = "HELLo WORLD!";
// console.log(toLowercase(input)); // Output: "hello world!"

// PROBLEM 13 ; Convert a string to uppercase

// let string = "Hello World!";
// console.log(string.toUpperCase())

// function toUppercase(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);

//         // Check if the character is an uppercase letter (A-Z)
//         if (charCode >= 97 && charCode <= 122) {
//             // Convert to lowercase by adding 32 to the char code
//             result += String.fromCharCode(charCode - 32);
//         } else {
//             // If it's not an uppercase letter, keep the character as is
//             result += str[i];
//         }

//     }

//     return result;
// }
// let input = "Hello World!";
// console.log(toUppercase(input));

// PROBLEM 14 Concatenate two strings 

// let str1 = "hello";
// let str2 = "harry";
// console.log(str1 + " " + str2);

// // method : using string method
// console.log(str1.concat(" "+str2));

// PROBLEM 15 :  Find the maximum value in an object

// let obj1 = {
   
//     "marks1": 90,
//     "marks2": 60,
//     "marks3": 50,
//     "marks4": 93
// };

// let value = Object.values(obj1)
// let maxValue = Math.max(...value)
// console.log("Maximum Value in the object is " + maxValue);


// PROBLEM 6: Check if a string is a palindrome 

// method 1 ;
// function isPalindrome (str){
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // remove
//     console.log(cleanedStr)
// let reverseStr = cleanedStr.split('').reverse().join('')
// console.log(reverseStr)
// return cleanedStr === reverseStr;
// }

// let str = prompt("enter a string"); 
// let result1 = isPalindrome(str)
// console.log(result1);

// Method 2 ; 
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let left = 0;
//     let right = cleanedStr.length - 1;

//     while (left < right) {
//       if (cleanedStr[left] !== cleanedStr[right]) {
//         return false; // Characters do not match
//       }
//       left++;
//       right--;
//     }

//     return true; // All characters matched
//   }

//   // Example usage
//   console.log(isPalindrome('A man, a plan, a canal, Panama ')); // Output: true


// PROBLEM 7: Sum all numbers in an array
// function sumArr(arr) {
//     let totalSum = 0; // Initialize totalSum to 0
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i]; // Add each element to totalSum
//     }
//     return totalSum; // Return the sum of all elements
// }

// // Example usage: Collect user input for the array
// let arr = [];
// let n = prompt("Enter the number of elements in the array:");
// for (let i = 0; i < n; i++) {
//     let value = parseFloat(prompt(`Enter element ${i + 1}:`));
//     arr.push(value);
// }

// let result2 = sumArr(arr);
// console.log(`${arr} =>Sum of the array elements:  = ${result2}`);

// PROBLEM 8: Find the average of numbers in an array

//  function sumArr(arr) {
//         let totalSum = 0; // Initialize totalSum to 0
//         for (let i = 0; i < arr.length; i++) {
//             totalSum += arr[i]; // Add each element to totalSum
//         }
//         return totalSum; // Return the sum of all elements
//     }

//     // Example usage: Collect user input for the array
//     let arr = [];
//     let n = prompt("Enter the number of elements in the array:");
//     for (let i = 0; i < n; i++) {
//         let value = parseFloat(prompt(`Enter element ${i + 1}:`));
//         arr.push(value);
//     }

//     let result2 = sumArr(arr);
//     console.log(`${arr} =>Sum of the array elements:  = ${result2}`);

//     function avgArr(){
//         return result2/arr.length
//     }
//     let result3 = avgArr();
//     console.log(`Average of the array elements: ${result3}`);

// PROBLEM 9 :Remove duplicates from an array 
//  Using Array Methods
// function removeDuplicate(arr){
//     let newArr =[]
//     for (let i = 0; i < arr.length; i++) { 	
//         if (newArr.indexOf(arr[i])===-1){
//           newArr.push(arr[i])
//         }

//     }
//     return newArr
// }

// Without Array Method

// function removeDuplicate(arr) {
//     let uniqueArr = [];
//     let isDuplicate;
//     for (let i = 0; i < arr.length; i++) {
//         isDuplicate = false;
//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 isDuplicate = true
//                 break;
//             }

//         }
//         if (!isDuplicate) {
//             uniqueArr[uniqueArr.length] = arr[i]
//         }
//     }
//     return uniqueArr;
// }

// arr = [2, 44, 4, 64, 2, 45, 3, 2]

// let result4 = removeDuplicate(arr)
// console.log(result4);


// PROBLEM 10 :Find the length of a string 
// let a = (str)=>{
//     let b = str.split(' ').join('')
//     console.log(b)
//     return b.length;
// }

// let str = prompt("enter string here :")
// let result5 = a(str)
// console.log(result5);


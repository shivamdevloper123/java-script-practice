// How to add an Array:
// const numbers = [3, 7, 2, 9, 5];
// let firstNumArr = numbers[0]
// function sum(numbers) {
//   let total = firstNumArr
//   for (let i = 1; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;

// }
// let result5 = sum(numbers)
// console.log(result5);


// PROBLEM 1 : Reverse a string

// SOLUTION 1:
// Method:1
// let a  = "helloworld";
// let result1 = a.split('').reverse().join("")
// console.log(result1);
//  OR
// console.log("helloworld".split('').reverse().join(""));


// let = str = prompt("Enter text here")
// function reverseString(str) {
//     // Method 1: Using a loop
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;

// }

// let result2 = reverseString(str)
// console.log(result2);
// alert(`your text is reversed : ${result2}`)

// PROBLEM 2:Check if a number is even or odd
// let number = parseInt(prompt("Enter any number here"))
// function Check(number){
//   if(number%2===0){
//     alert(`your number ${number} is Even`)

//   }
//   else if(number%2!==0){
//     alert(`your number ${number} is Odd`)
//  }
//  else{
//   alert("you have entered a wrong value, please enter a valid number here")
//  }
// }

// let result3 = Check(number);
// console.log(result3);

// PROBLEM 3: Find the largest number in an array
// let arr = [1,32,454,5,5654,664546,275,1518,413,811,587,321,2,4,5]


// let largeNum = Math.max(...arr);
// console.log(largeNum);

// Using reduce method
// const maxNumber = arr.reduce((max, current) => current > max ? current : max, arr[0]);
// console.log(maxNumber);

// By loop method:

// const numbers = [3, 7, 2, 9, 5];
// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }
// }

// console.log(maxNumber); // Output: 9


// PROBLEM 4:Count the number of vowels in a string

// let name = prompt("enter a string ").toString();

// function checkVowel(name) {
//   let vowel = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0; // Initializes the count variable to 0 

//   // Loop through each character in the name string
//   for (let i = 0; i < name.length; i++) {
//     // Check if the character is a vowel
//     if (vowel.includes(name[i].toLowerCase())) {
//       count++;  // Increments the count by 1 if a vowel is found
//       console.log(`The character "${name[i]}" is a vowel.`);
//     }
//   }

//   if (count > 0) {
//     console.log(`The string "${name}" has ${count} vowel(s).`);
//   } else {
//     console.log(`The string "${name}" has no vowels.`);
//   }

//   return count;
// }

// let result6 = checkVowel(name)
// console.log(result6);

// PROBLEM 5 : Find the factorial of a number

// factorial by recursive function

// function factorial(num){

// if (num === 1 || num===0){
//     return  1
// }else{
//     return num*factorial(num-1)
// }
// }
// let userInput = parseInt(prompt("Enter a number to calculate its factorial:"));
// let result8 = factorial(userInput)
// alert(`factorial of number ${userInput} :  ${result8}`)

// factorial by loop ;

// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i
//   }
//   return fact;
// }

// let num = parseInt(prompt("Enter a number to calculate its factorial:"))
// let result9 = factorial(num)
// alert(`factrial of ${num}: ${result9}`);


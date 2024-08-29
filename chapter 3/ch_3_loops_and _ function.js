//for loop

// for (let i=1;i<=10;i++){
//   console.log(`Multiplication Table of ${i}:`);
//   for(let j=1 ;j<=10;j++){
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// for in loop : 

let student = {
  name:"Rahul",
  PhoneNumber : 123432526,
  marks : 84 ,
  age : 14
}

// for (let key in student) {
//   console.log(key +":"+ student[key] )
// }


//for of loop:
for (let key of Object.keys(student)) {
  // console.log(student)
}
for (let value of Object.values(student)) {
  // console.log(value)
}
for (let [key,value] of Object.entries(student)) {
  // console.log(key,value)
}

//while loop :

// let m =10
// while (m>=1) {
//   console.log(m);
//   m--;
// }

//do While loop :


// let k = 0
// do {
//   console.log(k)
//   k++;
  
// } while (k<10);

// parseInt and parseFloat :
// let int = "5"
// console.log(typeof(int))
// let a = parseFloat(int)
// console.log(typeof(a)+a)

// let num = "5.1"
// console.log(typeof(num))
// let b = parseInt(num,10)
// console.log(typeof(b)+b)




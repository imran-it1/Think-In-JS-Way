// let x = 3;
// const add = function () {
//   let y = 2;
//   console.log(x);
//   return function () {
//     let z = 10;
//     console.log(x + y); // 3 + 2 = 5
//     return function () {
//       console.log(x + y + z); // 10 + 2 + 3 = 15
//     };
//   };
// };

// let output = add();
// let output2 = output();
// add();
// output();
// output2();
// console.dir(output2);

/**
 * add() 2 ta scope kre refer kore
 * 1. function scope
 * 2. global scope x = 3
 */

/**
 * Output() 3ta scope ke refer kore thake
 * 1. closure  y = 2;
 * 2. functio scope
 * 3. global scope  x = 3
 */

/**
 * Output2() 4 ta scpoe ba duniya ke refer kore thake
 * 1. closure1  y = 2
 * 2. Closure2  z = 10
 * 3. function scope
 * 4. global scope x = 3
 */

/**
 * var only function a atkay
 */
// function print() {
//   var x = 2;
// }
// // console.log(x);

// if (true) {
//   var num = 10;
// }
// console.log(num);

// Closure Example

//Example 1

// function bankAccount(initialBalance) {
//   var balance = initialBalance;
//   return function () {
//     return balance;
//   };
// }

// var account = bankAccount(100000);
// console.log(account());
// console.dir(account);

// Example 2

// var fName = "imran";
// function init() {
//   var name = "Mozilla";
//   function print() {
//     console.log(name);
//   }
//   print();
// }

// init();

// function myFunc() {
//   var a = 20;
//   function print() {
//     console.log(a);
//   }
//   print();
// }

// var innerFunc = myFunc();

// for (var i = 1; i <= 3; i++) {
//   let print = () => {
//     console.log(i);
//   };
//   console.log(i);
//   console.dir(print);
//   setTimeout(() => {
//     print();
//   }, 3000);
// }

// console.log("I am fast");

var a = 1;
a = 2;
a = 3;

console.log(a);

let x = 1;
x = 2;
x = 3;

console.log(x);

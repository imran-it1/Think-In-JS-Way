// "use strict";

var x = 5;

function print() {
  var x = 10;
  //   var x = 15;
  console.log(`Inside function `, x);
}

// Window is matter of Browser. Need browser to see the result
console.log(window.x);
print();
// Prove that X variable are in window object or GEC
// console.log(window.x);

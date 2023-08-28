// "use strict";

var x = 5;

function print() {
  //   var x = 10;
  //   var y = 10;
  //   var x = 15;
  console.log(`Inside function `, x);
}

// Window is matter of Browser. Need browser to see the result
// const/let diye declared korle abar access korte parba na. Because const/let variable are not added to the window object
console.log(window.x);
print();
// Prove that X variable are in window object or GEC
// console.log(window.x);

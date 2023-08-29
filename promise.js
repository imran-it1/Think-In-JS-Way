// let promise = new Promise((rsesolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     rsesolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log("This is in the then " + message);
//   })
//   .catch((message) => {
//     console.log("This is from catch " + message);
//   });

// let promise2 = new Promise((resolve, reject) => {
//   let raining = false;
//   if (raining) {
//     resolve("This is rainign");
//   } else {
//     reject("This is not raining");
//   }
// });

// promise2
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// let promise = new Promise((resolve, reject) => {
//   let a = 14;
//   if (a > 10) {
//     resolve("True");
//   } else {
//     reject("False");
//   }
// });

// promise
//   .then((getMessage) => {
//     console.log("Promise resolved " + getMessage);
//   })
//   .catch((error) => {
//     console.log("Promise rejected " + error);
//   })
//   .finally(() => {
//     console.log("This is from finally");
//   });

// const userLeft = true;
// const userWatchingCatMeme = false;

// function watchTutorialPriomse() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "Okay keep Watching",
//       });
//     } else {
//       resolve("Like commment and subscribe");
//     }
//   });
// }

// watchTutorialPriomse()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(`${error.name} ${error.message}`);
//   });

const finishModuel = new Promise((resolve, reject) => {
  resolve("Moduel is finished");
});
const finishProject = new Promise((resolve, reject) => {
  resolve("Moduel is finished");
});
const finishPractice = new Promise((resolve, reject) => {
  resolve("Moduel is finished");
});

// Return all resolve value in an array
Promise.all([finishModuel, finishPractice, finishProject]).then((responses) => {
  console.log(responses);
});

// Return the first one who get executed first
Promise.race([finishModuel, finishPractice, finishProject]).then(
  (responses) => {
    console.log(responses);
  }
);

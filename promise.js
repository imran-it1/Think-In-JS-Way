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

// const finishModuel = new Promise((resolve, reject) => {
//   resolve("Moduel is finished");
// });
// const finishProject = new Promise((resolve, reject) => {
//   resolve("Moduel is finished");
// });
// const finishPractice = new Promise((resolve, reject) => {
//   resolve("Moduel is finished");
// });

// // Return all resolve value in an array
// Promise.all([finishModuel, finishPractice, finishProject]).then((responses) => {
//   console.log(responses);
// });

// // Return the first one who get executed first
// Promise.race([finishModuel, finishPractice, finishProject]).then(
//   (responses) => {
//     console.log(responses);
//   }
// );

const promiseOne = new Promise((resolve, reject) => {
  let isMarried = true;
  if (isMarried) {
    resolve({
      name: "imran",
      age: 23,
    });
  } else {
    reject("Rejected");
  }
});

promiseOne.then((message) => {
  console.log(message.name);
});

// https://jsonplaceholder.typicode.com/users

const promiseTwo = new Promise((resolve, reject) => {
  const response = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.ok === false) {
        throw new Error("Something went wrong");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(`Error  ${err}`);
    });
});

promiseTwo
  .then((data) => console.log(data))
  .catch((message) => console.log(message));

const promiseThree = new Promise(function (resolve, reject) {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  res
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      } else {
        const data = res.json();
        return data;
      }
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

promiseThree
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(console.log("After eventual resolve or reject"));

// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making request to ${location}`);
//     if (location === "google") {
//       resolve("Hello Google");
//     } else {
//       reject("We only accept google");
//     }
//   });
// }

// makeRequest("google")
//   .then((messaeg) => {
//     console.log(messaeg);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing response");
//     resolve(`Extra information ${response}`);
//   });
// }

// // processRequest("Baler Information").then((messages) => {
// //   console.log(messages);
// // });

// makeRequest("google")
//   .then((response) => {
//     //   console.log(response);
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   });

// async function calldata() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
// }

// calldata();

// console.log("I am from last");

// async await it the better version of promise

new Promise((resolve, reject) => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return resolve(data);
    })
    .catch(() => {
      return reject();
    });
})
  .then((data) => {
    console.log(data);
  })
  .catch(() => console.log("Something Went Wrong"));

async function getdata() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log(data);
  console.log("imran");
}

getdata();

// async await Promise er boro khalato vai. Promise a je bar bar .then likha lage seta theke mukti mele aync await abort
// .then diye result na dhore, asaync await a promise we response amra variable a dhorte pari.
// awiat use kore amra data na paoa obdi opekkha korte boli. Na hole data na pele, show korbo ki.

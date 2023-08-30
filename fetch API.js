// Fetch is just promise
// const promise = fetch("https://jsonplaceholder.typicode.com/users");
// promise
//   .then((response) => {
//     //   console.log(response.status);
//     //   console.log(response.ok);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://jsonplaceholder.typicode.com/user")
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.ok);
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error " + error));

// const promise = fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// });
// promise
//   .then((res) => {
//     console.dir(res);
//     console.log(res.statusText);
//     console.log(res.body);
//     if (res.ok) {
//       console.log("Successful Response");
//     } else {
//       console.log("Not successful");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log("Fetching not successful");
//   });

// console.log("Hi Upper");

// const userData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// };

// userData();

// console.log("Hi Bottom");

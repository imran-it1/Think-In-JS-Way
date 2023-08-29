function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "google") {
      resolve("Hello Google");
    } else {
      reject("We only accept google");
    }
  });
}

// makeRequest("google")
//   .then((messaeg) => {
//     console.log(messaeg);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information ${response}`);
  });
}

// processRequest("Baler Information").then((messages) => {
//   console.log(messages);
// });

makeRequest("google")
  .then((response) => {
    //   console.log(response);
    console.log("Response Received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  });

try {
  let age = aler("Enter our age please");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

try {
  setTimeout(() => {
    try {
      console.log(imran);
    } catch (error) {
      console.log("Something Wrong");
    }
  }, 1000);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("imran");

try {
  let age = 25;
  if (age < 18) {
    throw new Error("baccha kaccha not allow");
  } else {
    console.log("You are allowed");
  }
} catch (error) {
  console.log(error);
}

try {
} catch (error) {}

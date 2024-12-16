// Exploring Asynchronous Programming
// ===================================

// 1. Callbacks
// 2. Promises
// 3. Async/Await

const fs = require("node:fs/promises");
const promise1 = fs.readFile("file1.txt", "utf8");

promise1
  .then((file1Data) => {
    const promise = fs.readFile("file2.txt", "utf8");
    promise
      .then((file2Data) => {
        const promise = fs.readFile("file3.txt", "utf8");
        promise
          .then((file3Data) => {
            console.log(file1Data);
            console.log(file2Data);
            console.log(file3Data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));

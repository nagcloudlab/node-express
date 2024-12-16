// Exploring Asynchronous Programming
// ===================================

// 1. Callbacks
// 2. Promises
// 3. Async/Await

// 1. Callbacks

// Callbacks are functions that are passed as arguments to other functions.
// They are executed after the function completes its task.

const fs = require("node:fs");

fs.readFile("file1.txt", "utf8", (err, file1Data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.readFile("file2.txt", "utf8", (err, file2Data) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.readFile("file3.txt", "utf8", (err, file3Data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(file1Data);
      console.log(file2Data);
      console.log(file3Data);
    });
  });
});

//// design issues with callbacks

// Callback Hell
// -------------
// Callback hell is a situation where callbacks are nested
// within other callbacks several levels deep.

// issues with callbacks
// ---------------------
// - Hard to read and maintain
// - Error handling is difficult
// - Callbacks are not reusable

// Solution: Promises

// ------------------------------

//

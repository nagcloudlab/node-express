// Exploring Asynchronous Programming
// ===================================

// 1. Callbacks
// 2. Promises
// 3. Async/Await

// 1. Callbacks

// Callbacks are functions that are passed as arguments to other functions.
// They are executed after the function completes its task.

const fs = require("node:fs/promises");

async function readFiles() {
  try {
    const promise1 = fs.readFile("file1.txt", "utf8");
    const promise2 = fs.readFile("file2.txt", "utf8");
    const promise3 = fs.readFile("file3.txt", "utf8");
    // const data = await Promise.race([promise1, promise2, promise3]);
    const data = await Promise.all([promise1, promise2, promise3]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFiles();

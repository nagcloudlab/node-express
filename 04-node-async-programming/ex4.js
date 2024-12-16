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
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    const data3 = await fs.readFile("file3.txt", "utf8");
    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (err) {
    console.error(err);
  }
}

readFiles();

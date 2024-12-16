const fs = require("fs");

const callback = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
};

fs.readFile("file1.txt", "utf8", callback); // Event
fs.readFile("file2.txt", "utf8", callback); // Event
console.log("cont.. with other work");
// Output:

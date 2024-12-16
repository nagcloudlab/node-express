const fs = require("fs"); // core module

// read file1.txt synchronously ( blocking IO)
const file1Data = fs.readFileSync("file1.txt", "utf8");
console.log(file1Data);

// read file2.txt synchronously ( blocking IO)
const file2Data = fs.readFileSync("file2.txt", "utf8");
console.log(file2Data);

// cont.. with other work
console.log("cont.. with oter work..");

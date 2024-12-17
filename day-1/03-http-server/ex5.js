const http = require("http");
const fs = require("fs");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  const fileReadStream = fs.createReadStream("./files/temp_10GB_file"); // event emitter
  fileReadStream.on("data", (chunk) => {
    console.log("chunk length: ", chunk.length);
    res.write(chunk);
  });
  fileReadStream.on("end", () => {
    console.log("file read completed");
    res.end();
  });
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

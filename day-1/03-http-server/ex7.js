const http = require("http");
const fs = require("fs");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  const fileReadStream = fs.createReadStream("./files/temp_10GB_file"); // event emitter
  const resWriteSream = res;
  fileReadStream.pipe(resWriteSream); // backpressure is handled by pipe
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

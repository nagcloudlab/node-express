const http = require("http");
const fs = require("fs");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  fs.readFile("./files/temp_10GB_file", (err, fileData) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      res.end();
      return;
    }
    res.writeHead(200, { "Content-Type": "application/octet-stream" });
    res.write(fileData);
    res.end();
  });
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

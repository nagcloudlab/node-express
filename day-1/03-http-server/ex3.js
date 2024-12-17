const http = require("http");
const fs = require("fs");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  fs.readFile("./files/all-levels node.pdf", (err, fileData) => {
    if (err) {
      console.error(err);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
      return;
    }
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write(fileData);
    res.end();
  });
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const http = require("http");
const fs = require("fs");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  const fileData = fs.readFileSync("./files/all-levels node.pdf"); //...
  res.writeHead(200, { "Content-Type": "application/pdf" });
  res.write(fileData);
  res.end();
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

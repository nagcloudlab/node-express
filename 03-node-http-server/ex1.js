const http = require("http");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  console.log("request event");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World");
  res.end();
}); // Event

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const http = require("http");
const server = http.createServer();
const PORT = 3000;
server.on("request", (req, res) => {
  if (req.url === "/home") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        messaage: "Welcome Home",
        // id: Math.random(),
      })
    );
  } else if (req.url === "/friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        freinds: {
          id: Math.random(),
          name: "John Doe",
        },
      })
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:8080", "http://localhost:8081"],
  },
});

io.on("connection", (socket) => {
  console.log("user Connected");
  const users = [];

  for (let [id] of io.of("/").sockets) {
    users.push({
      name: id,
    });
  }
  io.emit("users", users);
});

httpServer.listen(3001, () =>
  console.log(`server listening at http://localhost:3000`)
);

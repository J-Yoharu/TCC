const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:8080", "http://localhost:8081"],
  },
});

io.on("connection", (socket) => {
  console.log("user Connected");

  const users = [];

  io.of("/").sockets.forEach(function (data) {
    users.push({
      name: data.id,
      connected: data.connected,
      disconnected: data.disconnected,
    });
  });

  io.emit("get-users-on", users);
});

httpServer.listen(3001, () =>
  console.log(`server listening at http://localhost:3000`)
);

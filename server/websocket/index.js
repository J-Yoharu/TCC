const WebSocket = require("ws");
const server = new WebSocket.Server({
  port: 8081,
});
let sockets = [];
server.on("connection", function (socket, t) {
  console.log("criou um socket");
  console.log(server.clients);
  // sockets.push(socket);
  // socket.on("message", function (msg) {
  //   server.emit("connection", socket, "ok");
  //   console.log(sockets.length);
  // });
});

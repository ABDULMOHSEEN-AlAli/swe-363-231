const { Server } = require("socket.io");
const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const app = express();
const server = createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "BE5-chat.html"));
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

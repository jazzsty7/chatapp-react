const { createServer } = require("http");
const app = require("./app");
const {Server} = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer);
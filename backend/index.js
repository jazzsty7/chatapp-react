const { createServer } = require("http");
const app = require("./app");
const {Server} = require("socket.io");
require('dotenv').config();

const httpServer = createServer(app); // httpServer 는 express 서버를 의미함
const io = new Server(httpServer, { // io 는 socket.io 서버를 의미함
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});

require('./utils/io')(io); // io 관련 로직을 utils/io.js에서 가져옴

httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
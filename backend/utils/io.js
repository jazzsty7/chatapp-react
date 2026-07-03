module.exports = (io) => {
  // io 관련 로직  
  io.emit('message', 'Hello from server!'); // 예시: 클라이언트에게 메시지 전송
  io.on('connection', async (socket) => {
    console.log('client is connected', socket.id);
  });
};
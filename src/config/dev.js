const config = {
  socket: {
    config: {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ['polling', 'websocket']
    }
  }
};

module.exports = config;

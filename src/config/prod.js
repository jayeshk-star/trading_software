const config = {
  socket: {
    config: {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    }
  }
};

module.exports = config;

if (process.env.REACT_APP_MODE === 'production') process.env.REACT_APP_MODE = 'prod';

const config = {
  socket: {
    config: {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ['polling', 'websocket']
    }
  },
  sosServices: ['ambulance', 'police', 'fire brigade', 'road assistance', 'doctor']
};

module.exports = config;

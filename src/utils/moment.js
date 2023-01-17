import moment from 'moment';

const startOfDay = () => {
  return moment().startOf('day').toString();
};

const endOfDay = () => {
  return moment().endOf('day').toString();
};

const getDateTime = (date) => {
  if (date) {
    return moment(date).format('DD-MM-YYYY, h:mm a');
  } else {
    return undefined;
  }
};

const getDate = (date) => {
  return moment(date).format('DD-MM-YYYY');
};
const getNewDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

const getTime = (date) => {
  return moment(date).format('h:mm:ss a');
};
const getTimeInMins = (date) => {
  return moment(date).format('h:mm a');
};
const getOnlyTime = (date) => {
  return moment(date).format('h:mm');
};

const getDocsDate = (date) => {
  return !date ? '' : moment(date).format('YYYY-MM-DD');
};

function timeStartOfDay(date) {
  const timestamp = new Date(date).getTime();
  const timeDiff = new Date().getTime() - timestamp;

  let seconds = parseInt((timeDiff / 1000) % 60);
  let minutes = parseInt((timeDiff / (1000 * 60)) % 60);
  let hours = parseInt((timeDiff / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

function msToTime(duration) {
  const milliseconds = Math.floor((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

const getDayName = (date) => {
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = dayName[date.getDay()];
  return day;
};

export {
  startOfDay,
  endOfDay,
  getDate,
  getTime,
  getDateTime,
  timeStartOfDay,
  getNewDate,
  msToTime,
  getDayName,
  getOnlyTime,
  getTimeInMins,
  getDocsDate
};

const timeconversion = (time) => {
  const geetingTime = Number(time);
  const hours = Math.floor(geetingTime / 60);
  const min = geetingTime % 60;
  if (Number(hours) > 12) {
    const getTime = Math.floor(Number(hours) % 12);
    if (Number(getTime) <= 9 && Number(getTime) >= 0) {
      if (Number(min) <= 9 && Number(min) >= 0) {
        return '0' + getTime + ':0' + min;
      } else {
        return '0' + getTime + ':' + min;
      }
    } else {
      if (Number(min) <= 9 && Number(min) >= 0) {
        return getTime + ':0' + min;
      } else {
        return getTime + ':' + min;
      }
    }
  } else {
    if (Number(hours) <= 9 && Number(hours) >= 0) {
      if (Number(min) <= 9 && Number(min) >= 0) {
        return '0' + hours + ':0' + min;
      } else {
        return '0' + hours + ':' + min;
      }
    } else {
      if (Number(min) <= 9 && Number(min) >= 0) {
        return hours + ':0' + min;
      } else {
        return hours + ':' + min;
      }
    }
  }
};

export default timeconversion;

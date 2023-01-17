const ConvertToMinutes = (str) => {
  const resStr = str.split(':');
  const mins = Number(resStr[0]) * 60 + Number(resStr[1]);
  return mins;
};
export default ConvertToMinutes;

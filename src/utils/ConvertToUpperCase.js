const ConvertToUpperCase = (str) => {
  if (str !== undefined && str !== null && typeof str !== 'number') {
    const str2 = str?.charAt(0)?.toUpperCase() + str?.slice(1);
    return str2;
  }
};
export default ConvertToUpperCase;

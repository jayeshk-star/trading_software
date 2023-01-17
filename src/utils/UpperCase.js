const convertUpperCase = (str) => {
  if (str !== undefined) {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  }
};
export default convertUpperCase;

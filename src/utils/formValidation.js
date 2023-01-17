const nameValidate = (value) => {
  const letters = /^[a-zA-Z ]+$/;
  if (value === '' || letters.test(value) || value === undefined) {
    return value;
  } else {
    return false;
  }
};
const mobileNumberValidate = (value) => {
  return /^[6-9]\d{9}$/gm.test(value);
};

const emailValidate = (value) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};
const isValidPincode = (pin) => /^(\d{4}|^\d{6})$/.test(pin);

const specialCharacterNotAllowed = (str) => {
  var regex = /^[A-Za-z0-9 ]+$/.test(str);
  return regex;
};

export {
  nameValidate,
  mobileNumberValidate,
  emailValidate,
  isValidPincode,
  specialCharacterNotAllowed
};

export const isValidName = (name) => {
  const regEx = /[^a-zA-Z]/;

  return !(regEx.test(name) || name.length < 2);
};

export const isValidLastName = (lastName) => {
  const regEx = /[^a-zA-z]/;

  return regEx.test(lastName) || lastName.length < 4;
};

export const isValidEmail = (email) => {
  const regEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regEx.test(email);
};

export const isValidPassword = (psw) => {
  const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  return psw.match(regEx);
};

export const isTheSamePassword = (psw, pswRepeat) => {
  return isValidPassword(pswRepeat) && psw === pswRepeat;
};

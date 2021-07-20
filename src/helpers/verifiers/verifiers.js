export const isValidName = (name) => {
  const regEx = /^[a-zA-Z]+$/;

  return regEx.test(name) && name.length > 1;
};

export const isValidLastName = (lastName) => {
  const regEx = /^[a-zA-Z]+$/;

  return regEx.test(lastName) && lastName.length > 3;
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

export const isValidInput = (input, type) => {
  const regExes = {
    name: /^[a-zA-Z]+$/,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  }

  const lowerCaseType = type.toLowerCase();

  switch (lowerCaseType) {
    case 'firstname':
      return regExes.name.test(input) && input.length > 1;
    case 'lastname':
      return regExes.name.test(input) && input.length > 3;
    case 'email':
      return regExes.email.test(input);
    case 'password':
      return regExes.password.test(input);
    default:
      throw new Error('Unknown type of input!');
  }
}

export const isTheSamePassword = (psw, pswRepeat) => {
  return isValidPassword(pswRepeat) && psw === pswRepeat;
};

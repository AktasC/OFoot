/* Email Validation */

export const checkValidity = (email) => {
  const errors = {};
  if (!email) {
    errors.email = 'Merci de renseigner votre adresse email';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'L\'adresse email saisie est invalide';
  }
  return errors;
};

/* Password Validation */

export const checkValidityPassword = (password) => {
  const errorsPassword = {};
  if (!password) {
    errorsPassword.password = 'Merci de renseigner votre mot de passe';
  }
  else if (password.length < 6) {
    errorsPassword.password = 'Le mot de passe doit contenir au moins 6 caractères';
  }
  return errorsPassword;
};

/* is error object empty or not */

export const checkEmptiness = (table) => {
  if (Object.keys(table).length === 0) {
    return true;
  }
  return false;
};

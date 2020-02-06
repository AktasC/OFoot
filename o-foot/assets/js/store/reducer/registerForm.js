// --- initial state
const initialState = {
  inputLastnameValue: '',
  inputFirstnameValue: '',
  inputEmailValue: '',
  inputPasswordValue: '',
  signupDone: false,
  ErrorMessageInvalidLastname: '',
  LastnameValidCheck: true,
  ErrorMessageInvalidFirstname: '',
  FirstnameValidCheck: true,
  EmailRegisterValidCheck: true,
  ErrorMessageInvalidEmailRegister: '',
  PasswordRegisterValidCheck: true,
  ErrorMessageInvalidPasswordRegister: '',
  meta: '',
};

// --- action types

const CHANGE_LASTNAME_INPUT = 'CHANGE_LASTNAME_INPUT';
const CHANGE_FIRSTNAME_INPUT = 'CHANGE_FIRSTNAME_INPUT';
const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const REGISTER_USER = 'REGISTER_USER';
export const SIGNUP_DONE = 'SIGNUP_DONE';

// Validation
const INVALID_LASTNAME = 'INVALID_LASTNAME';
const VALID_LASTNAME = 'VALID_LASTNAME';
const INVALID_FIRSTNAME = 'INVALID_FIRSTNAME';
const VALID_FIRSTNAME = 'VALID_FIRSTNAME';
const INVALID_EMAIL = 'INVALID_EMAIL';
const VALID_EMAIL = 'VALID_EMAIL';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const VALID_PASSWORD = 'VALID_PASSWORD';
const DONT_REGISTER_USER = 'DONT_REGISTER_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LASTNAME_INPUT:
      return {
        ...state,
        inputLastnameValue: action.value,
      };
    case CHANGE_FIRSTNAME_INPUT:
      return {
        ...state,
        inputFirstnameValue: action.value,
      };
    case CHANGE_EMAIL_INPUT:
      return {
        ...state,
        inputEmailValue: action.value,
      };
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        inputPasswordValue: action.value,
      };
    case SIGNUP_DONE:
      return {
        ...state,
        signupDone: true,
        inputPasswordValue: '',
      };

    case INVALID_LASTNAME:
      return {
        ...state,
        ErrorMessageInvalidLastname: action.value,
        LastnameValidCheck: false,
      };

    case VALID_LASTNAME:
      return {
        ...state,
        ErrorMessageInvalidLastname: '',
        LastnameValidCheck: true,
      };

    case INVALID_FIRSTNAME:
      return {
        ...state,
        ErrorMessageInvalidFirstname: action.value,
        FirstnameValidCheck: false,
      };

    case VALID_FIRSTNAME:
      return {
        ...state,
        ErrorMessageInvalidFirstname: '',
        FirstnameValidCheck: true,
      };

    case INVALID_EMAIL:
      return {
        ...state,
        EmailRegisterValidCheck: false,
        ErrorMessageInvalidEmailRegister: action.value,
      };

    case VALID_EMAIL:
      return {
        ...state,
        EmailRegisterValidCheck: true,
        ErrorMessageInvalidEmailRegister: '',
      };

    case INVALID_PASSWORD:
      return {
        ...state,
        PasswordRegisterValidCheck: false,
        ErrorMessageInvalidPasswordRegister: action.value,
      };

    case VALID_PASSWORD:
      return {
        ...state,
        PasswordRegisterValidCheck: true,
        ErrorMessageInvalidPasswordRegister: '',
      };

    case DONT_REGISTER_USER:
      return {
        ...state,
        ErrorMessageInvalidPasswordRegister: { password: 'Merci de renseigner votre mot de passe' },
        PasswordRegisterValidCheck: false,
        ErrorMessageInvalidEmailRegister: { email: 'Merci de renseigner votre adresse email' },
        EmailRegisterValidCheck: false,
        ErrorMessageInvalidLastname: { input: 'Merci de renseigner un nom' },
        LastnameValidCheck: false,
        ErrorMessageInvalidFirstname: { input: 'Merci de renseigner un prénom' },
        FirstnameValidCheck: false,
      };


    default: return state;
  }
};

// --- action creators
export const changeInput = (value, name) => {
  switch (name) {
    case 'lastname':
      return {
        type: CHANGE_LASTNAME_INPUT,
        value,
        name,
      };
    case 'firstname':
      return {
        type: CHANGE_FIRSTNAME_INPUT,
        value,
        name,
      };
    case 'email':
      return {
        type: CHANGE_EMAIL_INPUT,
        value,
        name,
      };
    case 'password':
      return {
        type: CHANGE_PASSWORD_INPUT,
        value,
        name,
      };
    default:
      '';
  }
};

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const dontRegisterUser = () => ({
  type: DONT_REGISTER_USER,
});

export const signupDone = () => ({
  type: SIGNUP_DONE,
});

export const LastNameInvalid = (value) => ({
  type: INVALID_LASTNAME,
  value,
});

export const LastNameValid = () => ({
  type: VALID_LASTNAME,
});

export const FirstNameInvalid = (value) => ({
  type: INVALID_FIRSTNAME,
  value,
});

export const FirstNameValid = () => ({
  type: VALID_FIRSTNAME,
});

export const emailRegisterInvalid = (value) => ({
  type: INVALID_EMAIL,
  value,
});

export const emailRegisterValid = () => ({
  type: VALID_EMAIL,
});

export const PasswordRegisterInvalid = (value) => ({
  type: INVALID_PASSWORD,
  value,
});

export const PasswordRegisterValid = () => ({
  type: VALID_PASSWORD,
});

// --- export
export default reducer;

// --- initial state
const initialState = {
  // la valeur courante de l'input
  emailValue: '',
  passwordValue: '',
  errorMessageInvalidEmail: '',
  emailValidCheck: true,
  errorMessageInvalidPassword: '',
  passwordValidCheck: true,
};

// --- action types
const CHANGE_INPUT_LOGIN = 'CHANGE_INPUT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
const INVALID_EMAIL = 'INVALID_EMAIL';
const VALID_EMAIL = 'VALID_EMAIL';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const VALID_PASSWORD = 'VALID_PASSWORD';
const DONT_CONNECT_USER = 'DONT_CONNECT_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_LOGIN:
      return {
        ...state,
        [action.name]: action.value,
      };

    case INVALID_EMAIL:
      return {
        ...state,
        errorMessageInvalidEmail: action.value,
        emailValidCheck: false,
      };

    case VALID_EMAIL:
      return {
        ...state,
        errorMessageInvalidEmail: '',
        emailValidCheck: true,

      };

    case INVALID_PASSWORD:
      return {
        ...state,
        errorMessageInvalidPassword: action.value,
        passwordValidCheck: false,
      };

    case VALID_PASSWORD:
      return {
        ...state,
        errorMessageInvalidPassword: '',
        passwordValidCheck: true,
      };

    case DONT_CONNECT_USER:
      return {
        ...state,
        errorMessageInvalidPassword: { password: 'Merci de renseigner votre mot de passe' },
        passwordValidCheck: false,
        errorMessageInvalidEmail: { email: 'Merci de renseigner votre adresse email' },
        emailValidCheck: false,
      };


    default: return state;
  }
};

// --- action creators

export const onChangeInputLogin = (value, name) => ({
  type: CHANGE_INPUT_LOGIN,
  value,
  name,
});

export const onChangeInputPasswordLogin = (value) => ({
  type: CHANGE_PASSWORD_INPUT_LOGIN,
  value,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const emailInvalid = (values) => ({
  type: INVALID_EMAIL,
  value: values,
});

export const emailValid = () => ({
  type: VALID_EMAIL,
});

export const passwordlInvalid = (values) => ({
  type: INVALID_PASSWORD,
  value: values,
});

export const passwordValid = () => ({
  type: VALID_PASSWORD,
});

export const dontConnectUser = () => ({
  type: DONT_CONNECT_USER,
});

// --- export
export default reducer;

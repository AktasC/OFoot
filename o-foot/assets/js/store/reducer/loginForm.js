// --- initial state
const initialState = {
  // la valeur courante de l'input
  EmailValue: '',
  PasswordValue: '',
  ErrorMessageInvalidEmail: '',
  EmailValidCheck: true,
  ErrorMessageInvalidPassword: '',
  PasswordValidCheck: true,
};

// --- action types
const CHANGE_EMAIL_INPUT_LOGIN = 'CHANGE_EMAIL_INPUT_LOGIN';
const CHANGE_PASSWORD_INPUT_LOGIN = 'CHANGE_PASSWORD_INPUT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
const INVALID_EMAIL = 'INVALID_EMAIL';
const VALID_EMAIL = 'VALID_EMAIL';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const VALID_PASSWORD = 'VALID_PASSWORD';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL_INPUT_LOGIN:
      return {
        ...state,
        EmailValue: action.value,
      };

    case CHANGE_PASSWORD_INPUT_LOGIN:
      return {
        ...state,
        PasswordValue: action.value,
      };

    case INVALID_EMAIL:
      return {
        ...state,
        ErrorMessageInvalidEmail: action.value,
        EmailValidCheck: false,
      };

    case VALID_EMAIL:
      return {
        ...state,
        ErrorMessageInvalidEmail: '',
        EmailValidCheck: true,
      };

    case INVALID_PASSWORD:
      return {
        ...state,
        ErrorMessageInvalidPassword: action.value,
        PasswordValidCheck: false,
      };

    case VALID_PASSWORD:
      return {
        ...state,
        ErrorMessageInvalidPassword: '',
        PasswordValidCheck: true,
      };


    default: return state;
  }
};

// --- action creators

export const onChangeInputEmailLogin = (value) => ({
  type: CHANGE_EMAIL_INPUT_LOGIN,
  value,
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

// --- export
export default reducer;

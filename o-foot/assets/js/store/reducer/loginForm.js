// --- initial state
const initialState = {
  // la valeur courante de l'input
  EmailValue: '',
  PasswordValue: '', 
};

// --- action types
const CHANGE_EMAIL_INPUT_LOGIN = 'CHANGE_EMAIL_INPUT_LOGIN';
const CHANGE_PASSWORD_INPUT_LOGIN = 'CHANGE_PASSWORD_INPUT_LOGIN';

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


// --- export
export default reducer;

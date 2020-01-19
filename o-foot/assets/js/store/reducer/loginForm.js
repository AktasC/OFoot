// --- initial state
const initialState = {
  // la valeur courante de l'input
  inputEmailValue: '',
  inputPasswordValue: '',
};

// --- action types
const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    default: return state;
  }
};

// --- action creators

export const onChangeInputEmail = (value) => ({
  type: CHANGE_EMAIL_INPUT,
  value,
});

export const onChangeInputPassword = (value) => ({
  type: CHANGE_PASSWORD_INPUT,
  value,
});


// --- export
export default reducer;

// --- initial state
const initialState = {
  // la valeur courante de l'input
  EmailValue: '',
  PasswordValue: '', 
  email:''
};

// --- action types
const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
const CHECK_VALIDITY = 'CHECK_VALIDITY';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      return {
        ...state,
        EmailValue: action.value,
      };

    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        PasswordValue: action.value,
      };
    
    case CHECK_VALIDITY: 
    return {
      ...state, 
      email: action.value,
    }
      

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

export const oncheckValidity = (value) => ({
  type: CHECK_VALIDITY, 
  value,
});


// --- export
export default reducer;

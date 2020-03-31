// --- initial state
const initialState = {
  signupDone: false,
};

// --- action types
export const REGISTER_USER = 'REGISTER_USER';
export const SIGNUP_DONE = 'SIGNUP_DONE';


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_DONE:
      return {
        ...state,
        signupDone: true,
        inputPasswordValue: '',
      };

    default: return state;
  }
};

// --- action creators
export const registerUser = (value) => ({
  type: REGISTER_USER,
  value,
});

export const signupDone = () => ({
  type: SIGNUP_DONE,
});

// --- export
export default reducer;

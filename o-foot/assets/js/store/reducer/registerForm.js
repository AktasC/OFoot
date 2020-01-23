// --- initial state
const initialState = {    
    inputLastnameValue: '',
    inputFirstnameValue: '',
    inputEmailValue: '',
    inputPasswordValue: '',
    signupDone: false,
  };
  
  // --- action types
  
  const CHANGE_LASTNAME_INPUT = 'CHANGE_LASTNAME_INPUT';
  const CHANGE_FIRSTNAME_INPUT = 'CHANGE_FIRSTNAME_INPUT';
  const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
  const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
  export const REGISTER_USER = 'REGISTER_USER';
  export const SIGNUP_DONE = 'SIGNUP_DONE';
  
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
        }
      default:
        '';
    }
    
  };
  
  export const registerUser = () => ({
    type: REGISTER_USER,
  });

  export const signupDone = () => ({
    type: SIGNUP_DONE,
  });
  
  // --- export
  export default reducer;
  
// initial state
const initialState = {
  userInformations: [],
  current_password:'',
  new_password:'',
  new_password_check:'',
  errors: []
  };

  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
  export const CHANGE_AVATAR = 'CHANGE_AVATAR'; 
  export const CHANGE_NAME = 'CHANGE_NAME'; 
  export const CHANGE_EMAIL = 'CHANGE_EMAIL'; 
  export const MODIFY_INFO ='MODIFY_INFO'; 
  export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
  export const CHANGE_INPUT = 'CHANGE_INPUT';
  export const NO_SUBMIT = 'NO_SUBMIT'; 
  export const SUBMIT_CHANGE_PASSWORD = 'SUBMIT_CHANGE_PASSWORD'; 
  export const EMPTY_INPUTS = 'EMPTY_INPUTS'; 

  // ---- reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) { 
      case LOAD_INFOS_FROM_AXIOS:
        return {
          ...state,
          userInformations: action.value,
        };
  
      case CHANGE_AVATAR: 
        return {
          ...state, 
          userInformations: action.value, 
        }; 
  
      case CHANGE_NAME: 
        return {
          ...state, 
          userInformations: {...state.userInformations, first_name:action.value }, 
        };
  
      case CHANGE_EMAIL: 
        return {
          ...state, 
          userInformations: {...state.userInformations, email:action.value }, 
        };

      case CHANGE_LAST_NAME: 
        return {
          ...state, 
          userInformations: {...state.userInformations, last_name:action.value }, 
        };
      
        case CHANGE_INPUT:
          return {
            ...state,
            [action.name]: action.value,
          };

      case NO_SUBMIT: 
        return {
          ...state, 
          errors: action.value
        }
      
      case EMPTY_INPUTS: 
        return {
          ...state, 
          errors: [],
          new_password: '', 
          new_password_check: '', 
          current_password: '',
        }
  
      default: return state;
      }
  };

  
  export const userProfilInfo = () => ({
  type: USER_PROFIL_INFO,
  })
  
  export const loadInfoFromAxios = (value) => ({
  type: LOAD_INFOS_FROM_AXIOS,
  value,
  })
  
  export const changeAvatar = (value) => ({
  type: CHANGE_AVATAR,
  value, 
  })
  
  export const changeName = (value) => ({
  type: CHANGE_NAME, 
  value, 
  })
  
  export const changeEmail = (value) => ({
  type: CHANGE_EMAIL, 
  value, 
  })

  export const modifyUserInfo = (value) => ({
    type: MODIFY_INFO, 
    value, 
  })

  export const changeLastName = (value) => ({
    type: CHANGE_LAST_NAME,
    value,
  })

  export const changeInput = (value, name) => ({    
    type: CHANGE_INPUT,
    name,
    value,
  });

  export const noSubmitForm = (value) => ({
    type: NO_SUBMIT, 
    value, 
  })

  export const submitChangePassword = (value) => ({
    type: SUBMIT_CHANGE_PASSWORD, 
    value, 
  })

  export const emptyInputs = () => ({
    type: EMPTY_INPUTS,
  })
   // ---- export
  export default reducer;
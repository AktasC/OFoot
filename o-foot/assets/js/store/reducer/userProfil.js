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
  export const CHANGE_CURRENT_PASSWORD = 'CHANGE_CURRENT_PASSWORD'; 
  export const CHANGE_NEW_PASSWORD = 'CHANGE_NEW_PASSWORD'; 
  export const CHANGE_NEW_PASSWORD_CHECK = 'CHANGE_NEW_PASSWORD_CHECK'; 
  export const NO_SUBMIT = 'NO_SUBMIT'; 
  export const SUBMIT_CHANGE_PASSWORD = 'SUBMIT_CHANGE_PASSWORD'; 
  export const CHANGE_PASSWORD_DONE = 'CHANGE_PASSWORD_DONE'; 

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
      
      case CHANGE_CURRENT_PASSWORD: 
        return {
          ...state,
          current_password: action.value
        };

      case CHANGE_NEW_PASSWORD: 
        return {
          ...state, 
          new_password: action.value
        };

      case CHANGE_NEW_PASSWORD_CHECK: 
        return{
          ...state, 
          new_password_check: action.value
        };

      case NO_SUBMIT: 
        return {
          ...state, 
          errors: action.value
        }
      
      case CHANGE_PASSWORD_DONE: 
        return {
          ...state, 
          errors: [],
          new_password: '', 
          new_password_check: '', 
          current_password: ''
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

  export const currentPassword = (value) => ({
    type: CHANGE_CURRENT_PASSWORD, 
    value, 
  })

  export const newPassword = (value) => ({
    type: CHANGE_NEW_PASSWORD, 
    value, 
  })

  export const newPasswordCheck = (value) => ({
    type: CHANGE_NEW_PASSWORD_CHECK, 
    value, 
  })

  export const noSubmitForm = (value) => ({
    type: NO_SUBMIT, 
    value, 
  })

  export const submitChangePassword = () => ({
    type: SUBMIT_CHANGE_PASSWORD, 
  })

  export const changePasswordDone = () => ({
    type: CHANGE_PASSWORD_DONE,
  })
   // ---- export
  export default reducer;
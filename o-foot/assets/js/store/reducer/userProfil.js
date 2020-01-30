// initial state
const initialState = {
  userInformations: [],
  firstname: '', 
  lastname: '', 
  email: '', 
  };

  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
  export const CHANGE_AVATAR = 'CHANGE_AVATAR'; 
  export const CHANGE_NAME = 'CHANGE_NAME'; 
  export const CHANGE_EMAIL = 'CHANGE_EMAIL'; 
  export const MODIFY_INFO ='MODIFY_INFO'; 
  export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
  export const CHANGES_DONE = 'CHANGES_DONE';

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
          firstname: action.value,
          //userInformations: {...state.userInformations, first_name:action.value }, 
        };
  
      case CHANGE_EMAIL: 
        return {
          ...state, 
          email: action.value,
         // userInformations: {...state.userInformations, email:action.value }, 
        };

      case CHANGE_LAST_NAME: 
        return {
          ...state, 
          lastname : action.value,
         // userInformations: {...state.userInformations, last_name:action.value }, 
        };

      case CHANGES_DONE: 
      console.log(value); 
        return {
        
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

  export const changesDone = (value) => ({
    type: CHANGES_DONE, 
    value
  })
  // ---- export
  export default reducer;
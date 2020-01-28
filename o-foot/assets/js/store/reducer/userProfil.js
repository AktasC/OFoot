// initial state
const initialState = {
  userInformations: [] 
  };

  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
  export const CHANGE_AVATAR = 'CHANGE_AVATAR'; 
  export const CHANGE_NAME = 'CHANGE_NAME'; 
  export const CHANGE_EMAIL = 'CHANGE_EMAIL'; 
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
          userInformations: action.value, 
        };
  
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
  // ---- export
  export default reducer;
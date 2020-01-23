// initial state
const initialState = {
    userInformations: [],
  };
  
  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
  
  // ---- reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {           
      case LOAD_INFOS_FROM_AXIOS:
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
  
  // ---- export
  export default reducer;
  
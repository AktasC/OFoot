// initial state
const initialState = {
    userInformations: [],
  };
  
  export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
  
  // ---- reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case USER_PROFIL_INFO:
        return {
            ...state,
            userInformations: action.value,
        };
      default: return state;
    }
  };
  
  export const userProfilInfo = () => ({
    type: USER_PROFIL_INFO,
    value
  });
  
  // ---- export
  export default reducer;
  
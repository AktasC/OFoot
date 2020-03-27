// initial state
const initialState = {
  userInformations: {},
};

export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const USER_INFOS_UPDATE = 'USER_INFOS_UPDATE';

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
});

export const loadInfoFromAxios = (value) => ({
  type: LOAD_INFOS_FROM_AXIOS,
  value,
});

export const changePassword = (value) => ({
  type: CHANGE_PASSWORD,
  value,
});

export const userInfosUpdate = (value) => ({
  type: USER_INFOS_UPDATE,
  value,
});

// ---- export
export default reducer;

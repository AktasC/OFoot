// initial state
const initialState = {
  userInformations: [],
  current_password: '',
  new_password: '',
  new_password_check: '',
  errors: [],
};

export const USER_PROFIL_INFO = 'USER_PROFIL_INFO';
export const LOAD_INFOS_FROM_AXIOS = 'LOAD_INFOS_FROM_AXIOS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const NO_SUBMIT = 'NO_SUBMIT';
export const SUBMIT_CHANGE_PASSWORD = 'SUBMIT_CHANGE_PASSWORD';
export const EMPTY_INPUTS = 'EMPTY_INPUTS';
export const USER_INFOS_UPDATE = 'USER_INFOS_UPDATE';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_INFOS_FROM_AXIOS:
      return {
        ...state,
        userInformations: action.value,
      };

    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case NO_SUBMIT:
      return {
        ...state,
        errors: action.value,
      };

    case EMPTY_INPUTS:
      return {
        ...state,
        errors: [],
        new_password: '',
        new_password_check: '',
        current_password: '',
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

// ---- export
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const noSubmitForm = (value) => ({
  type: NO_SUBMIT,
  value,
});

export const submitChangePassword = (value) => ({
  type: SUBMIT_CHANGE_PASSWORD,
  value,
});

export const emptyInputs = () => ({
  type: EMPTY_INPUTS,
});

export const userInfosUpdate = (value) => ({
  type: USER_INFOS_UPDATE,
  value,
});

// ---- export
export default reducer;

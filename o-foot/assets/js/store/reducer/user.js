// initial state
const initialState = {
  logged: false,
  userId: localStorage.getItem('userId'),
  token: localStorage.getItem('token'),
  updateData: false,
  isManager: false,
};

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const LOG_USER = 'LOG_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const UPDATE_DATA = 'UPDATE_DATA';
export const RESET_UPDATE_DATA = 'RESET_UPDATE_DATA';
export const IS_MANAGER = 'IS_MANAGER';
const UPDATE_IS_MANAGER = 'UPDATE_IS_MANAGER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: localStorage.setItem('token', action.value),
      };
    case LOG_USER:
      return {
        ...state,
        logged: true,
        userId: localStorage.setItem('userId', action.value),
      };
    case DISCONNECT_USER:
      return {
        ...state,
        logged: false,
        userId: localStorage.removeItem('userId'),
        isManager: false,
      };
    case UPDATE_DATA:
      return {
        ...state,
        updateData: true,
      };
    case RESET_UPDATE_DATA:
      return {
        ...state,
        updateData: false,
      };

    case UPDATE_IS_MANAGER:
      switch (action.value) {
        case true:
          return {
            ...state,
            isManager: true,
          };
        case false:
          return {
            ...state,
          };
        default: return state;
      }

    default: return state;
  }
};

export const logUser = (value) => (
  {
    type: LOG_USER,
    value,
  }
);

export const updateToken = (value) => (
  {
    type: UPDATE_TOKEN,
    value,
  }
);

export const disconnectUser = () => (
  {
    type: DISCONNECT_USER,
  }
);

export const updateData = () => (
  {
    type: UPDATE_DATA,
  }
);
export const resetUpdateData = () => (
  {
    type: RESET_UPDATE_DATA,
  }
);

export const isManager = () => ({
  type: IS_MANAGER,
});
export const updateIsManager = (value) => ({
  type: UPDATE_IS_MANAGER,
  value,
});

// ---- export
export default reducer;

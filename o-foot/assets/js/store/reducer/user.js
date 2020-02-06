// initial state
const initialState = {
  logged: false,
  userId: localStorage.getItem('userId'),
  token: localStorage.getItem('token'),
  updateData: false,
};

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const LOG_USER = 'LOG_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const UPDATE_DATA = 'UPDATE_DATA';
export const RESET_UPDATE_DATA = 'RESET_UPDATE_DATA';

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
// ---- export
export default reducer;

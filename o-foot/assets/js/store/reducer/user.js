// initial state
const initialState = {
  logged: localStorage.getItem('logged'),
  userId: localStorage.getItem('userId'),
  token: localStorage.getItem('token'),
};

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const LOG_USER = 'LOG_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

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
        logged: localStorage.setItem('logged', true),
        userId: localStorage.setItem('userId', action.value),
      };    
    case DISCONNECT_USER:      
      return {
        ...state,
        logged: false,
        userId: localStorage.removeItem('userId'),
      };
    break;
    default: return state;
  }
};

export const logUser = (value) => (
  {
    type: LOG_USER,
    value,
  });

export const updateToken = (value) => (
  {
    type: UPDATE_TOKEN,
    value,
  });

export const disconnectUser = () => (
  {
    type: DISCONNECT_USER,
  }
);
// ---- export
export default reducer;

// initial state
const initialState = {
  logged: false,
  userId: null,
};

export const LOG_USER = 'LOG_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:      
      return {
        ...state,
        logged: true,
        userId: action.value,
      };
    case DISCONNECT_USER:      
      return {
        ...state,
        logged: false,
        userId: '',
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

export const disconnectUser = () => (
  {
    type: DISCONNECT_USER,
  }
);
// ---- export
export default reducer;

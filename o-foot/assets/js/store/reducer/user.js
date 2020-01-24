// reducer pour gérer les donénes relatives à l'utilisateur

// initial state
const initialState = {
  username: 'Zizoudu13',
  avatar: '',
  logged: false,
  id:'',
  
};

export const LOG_USER = 'LOG_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      console.log('logok');
      return {
        ...state,
        logged: true,
        id: action.value,
      };
    case DISCONNECT_USER:
      console.log('lognotok');
      return {
        ...state,
        logged: false,
        id: '',
      };
    default: return state;
  }
};

export const logUser = (value) => (
  {
  type: LOG_USER,
  value
});

export const disconnectUser = () => (
  {
    type: DISCONNECT_USER,
  }
);

// ---- export
export default reducer;

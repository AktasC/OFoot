// reducer pour gérer les donénes relatives à l'utilisateur

// initial state
const initialState = {
  username: 'Zizoudu13',
  avatar: '',
  logged: false,
  
};

export const LOG_USER = 'LOG_USER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      console.log('logok');
      return {
        ...state,
        logged: true,
      };
    default: return state;
  }
};

export const logUser = () => (
  {
  type: LOG_USER,
});

// ---- export
export default reducer;

// reducer pour gérer les donénes relatives à l'utilisateur

// initial state
const initialState = {
  username: 'Zizoudu13',
  avatar: '',
  logged: false,
  
};

const LOG_USER = 'LOG_USER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:
      return {
        ...state,
        username: action.username,
        avatar: action.avatar,
        logged: true,
      };
    default: return state;
  }
};

export const logUser = (username, avatar) => ({
  type: LOG_USER,
  username,
  avatar,
});

// ---- export
export default reducer;

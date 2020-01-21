// reducer pour gérer les donénes relatives à l'utilisateur

// initial state
const initialState = {
  username: 'Zizoudu13',
  avatar: '',
  logged: false,
};

export const CONNECT_USER = 'CONNECT_USER';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        logged: true,
      };
    default: return state;
  }
};

export const connectUser = () => ({
  type: CONNECT_USER,
});

// ---- export
export default reducer;

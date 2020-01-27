// reducer pour gérer les donénes relatives à l'utilisateur

// initial state
const initialState = {
  username: 'Zizoudu13',
  avatar: '',
  logged: false,
  id:'',  
};

export const LOG_USER = 'LOG_USER';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

// ---- reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_USER:      
      return {
        ...state,
        logged: true,
        id: action.value,
      };
    break;    
    default: return state;
  }
};

export const logUser = (value) => (
  {
  type: LOG_USER,
  value
});

// ---- export
export default reducer;

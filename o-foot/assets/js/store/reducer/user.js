// initial state
const initialState = {
  logged: false,
  id:'',
  
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
        id: action.value,
      };
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

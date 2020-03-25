// --- initial state
const initialState = {
};

// --- action types

export const CONNECT_USER = 'CONNECT_USER';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

// --- action creators
export const connectUser = (value) => ({
  type: CONNECT_USER,
  value,
});


// --- export
export default reducer;

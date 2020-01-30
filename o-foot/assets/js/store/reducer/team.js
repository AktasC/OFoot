// --- initial state
const initialState = {
  // la valeur courante de l'input
  teamNameValue: '',
  teamAddressValue: '',
  teamStadiumValue: '',    
  teamCityValue: '',    
};
  
// --- action types

const CHANGE_INPUT = 'CHANGE_INPUT'; 
export const CREATE_TEAM = 'CREATE_TEAM';
  
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    default: return state;
  }
};

// --- action creators

export const createTeam = () => ({
  type: CREATE_TEAM,
});

export const changeInput = (value, name) => ({    
  type: CHANGE_INPUT,
  name,
  value,
});

// --- export
export default reducer;

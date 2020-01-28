// --- initial state
const initialState = {
  // la valeur courante de l'input
  teamNameValue: '',
  teamAddressValue: '',
  teamStadiumValue: '',    
  teamCityValue: '',    
};
  
// --- action types
const CHANGE_TEAM_NAME_VALUE = 'CHANGE_TEAM_NAME_VALUE';
const CHANGE_ADDRESS_NAME_VALUE = 'CHANGE_ADDRESS_NAME_VALUE';
const CHANGE_STADIUM_NAME_VALUE = 'CHANGE_STADIUM_NAME_VALUE';
const CHANGE_CITY_NAME_VALUE = 'CHANGE_CITY_NAME_VALUE'; 
const CHANGE_INPUT = 'CHANGE_INPUT'; 
  
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

export const changeTeamNameValue = () => ({
  type: CHANGE_TEAM_NAME_VALUE,
});

export const changeInput = (value, name) => ({    
  type: CHANGE_INPUT,
  name,
  value,
});

// --- export
export default reducer;

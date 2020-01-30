// --- initial state
const initialState = {
  // la valeur courante de l'input
  teamNameValue: '',
  teamAddressValue: '',
  teamStadiumValue: '',    
  teamCityValue: '', 
  teamId: 1, 
  playersList: []
};
  
// --- action types

const CHANGE_INPUT = 'CHANGE_INPUT'; 
export const CREATE_TEAM = 'CREATE_TEAM';
export const PLAYERS_INFOS = 'PLAYERS_INFOS';
  
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

export const playersInfos = () => ({
  type: PLAYERS_INFOS,
});

// --- export
export default reducer;

// --- initial state
const initialState = {
  // la valeur courante de l'input
  playersList: {},
  currentTeamId: '',
};

// --- action types

const UPDATE_CURRENT_TEAM_ID = 'UPDATE_CURRENT_TEAM_ID';
export const CREATE_TEAM = 'CREATE_TEAM';
export const PLAYERS_INFOS = 'PLAYERS_INFOS';
export const TEAM_INFOS_UPDATE = 'TEAM_INFOS_UPDATE';
export const UPDATE_PLAYERS_LIST = 'UPDATE_PLAYERS_LIST';
export const INVITE_PLAYER = 'INVITE_PLAYER';


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CURRENT_TEAM_ID:
      return {
        ...state,
        currentTeamId: action.value,
      };

    case UPDATE_PLAYERS_LIST:
      return {
        ...state,
        playersList: action.value,
      };

    default: return state;
  }
};

// --- action creators

export const createTeam = (value) => ({
  type: CREATE_TEAM,
  value,
});

export const teamInfosUpdate = (value) => ({
  type: TEAM_INFOS_UPDATE,
  value,
});

export const updateCurrentTeamId = (value) => ({
  type: UPDATE_CURRENT_TEAM_ID,
  value,
});

export const playersInfos = () => ({
  type: PLAYERS_INFOS,
});

export const updatePlayersList = (value) => ({
  type: UPDATE_PLAYERS_LIST,
  value,
});

export const invitePlayer = (value) => ({
  type: INVITE_PLAYER,
  value,
});

// --- export
export default reducer;

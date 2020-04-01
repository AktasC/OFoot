// --- initial state
const initialState = {
  // la valeur courante de l'input
  selectedOption: 'entrainement',
  selectedOptionMatch: undefined,
};

// --- action types
const EVENT_TYPE_SELECTION = 'EVENT_TYPE_SELECTION';
const MATCH_TYPE_SELECTION = 'MATCH_TYPE_SELECTION';
export const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
const EMPTY_INPUTS_EVENT = 'EMPTY_INPUTS_EVENT';


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'EVENT_TYPE_SELECTION':
      return {
        ...state,
        selectedOption: action.value,
      };

    case 'MATCH_TYPE_SELECTION':
      return {
        ...state,
        selectedOptionMatch: action.value,
      };

    case 'EMPTY_INPUTS_EVENT':
      return {
        ...state,
        selectedOption: 'entrainement',
        selectedOptionMatch: undefined,
      };


    default: return state;
  }
};

// --- action creators

export const eventTypeSelection = (value) => ({
  type: EVENT_TYPE_SELECTION,
  value,
});

export const matchTypeSelection = (value) => ({
  type: MATCH_TYPE_SELECTION,
  value,
});

export const addNewEvent = (value) => ({
  type: ADD_NEW_EVENT,
  value,
});

export const resetAddEventInput = () => ({
  type: EMPTY_INPUTS_EVENT,
});

// --- export
export default reducer;

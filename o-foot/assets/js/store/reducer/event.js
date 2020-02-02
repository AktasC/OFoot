// --- initial state
const initialState = {
    // la valeur courante de l'input
    selectedOption: 'entrainement',
    selectedOptionMatch: undefined,
    opponent: undefined,
    date_time: '',
    stadium: '',
    adress: ''
  };
    
  // --- action types
  const EVENT_TYPE_SELECTION = 'EVENT_TYPE_SELECTION';
  const MATCH_TYPE_SELECTION = 'MATCH_TYPE_SELECTION'; 
  const CHANGE_INPUT_ADD_EVENT = 'CHANGE_INPUT_ADD_EVENT';

    
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
          selectedOptionMatch: action.value
      };
    
    case 'CHANGE_INPUT_ADD_EVENT':
        return {
            ...state, 
            [action.name]: action.value,
        }
      
  
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

  export const changeInput = (value, name) => ({
    type: CHANGE_INPUT_ADD_EVENT,
    value,
    name,
  })
  
  // --- export
  export default reducer;
  
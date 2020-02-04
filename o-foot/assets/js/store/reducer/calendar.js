// initial state
const initialState = {
    teamCalendarInformations: [],
    };

    export const LOAD_INFOS_CALENDAR_AXIOS = 'LOAD_INFOS_CALENDAR_AXIOS'; 
    export const CALENDAR_INFO = 'CALENDAR_INFO';
  
    // ---- reducer
    const reducer = (state = initialState, action = {}) => {
      switch (action.type) { 
        case LOAD_INFOS_CALENDAR_AXIOS:
            return {
              ...state,
              teamCalendarInformations: action.value,
            }; 
        default: return state;
      }
    };
  
    
    export const loadInfoCalendarFromAxios = (value) => ({
      type: LOAD_INFOS_CALENDAR_AXIOS,
      value,
    })
  
    export const teamCalendarInfo = () => ({
      type: CALENDAR_INFO,
    })

     // ---- export
    export default reducer;
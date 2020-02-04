import axios from 'axios';

import { ADD_NEW_EVENT, resetAddEventInput } from '../reducer/event';
import { addNotification } from '../addNotification';
import { updateData } from '../reducer/user';

const addEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEW_EVENT: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');      
           
      const {
        selectedOption, 
        selectedOptionMatch,
        opponent,
        date_time,
        stadium,
        adress    
      } = store.getState().event;

      const {
          currentTeamId
      } = store.getState().team;

      

      let config = {        
        headers: { 'Authorization': `Bearer ${token}` }        
      }

      if(selectedOption === 'entrainement'){
        let data = {        
            address_practice: adress,
            date_time_practice: date_time,
            presence_practice: null,
            stadium_practice: stadium
          }      

          axios.post(`https://ofoot.club/api/v1/practices/teams/${currentTeamId}/new`, data, config)
    
          .then(function (response) {
            addNotification('create-event-success');
            store.dispatch(updateData());
            store.dispatch(resetAddEventInput());
          })
          .catch(function (error) {
            addNotification()
          }); 
    
          break;
        }

        if(selectedOption === 'match'){
            let data = {   
                address_game: adress,
                date_time_game: date_time,
                domicile_exterieur: selectedOptionMatch,
                opponent_team: opponent,
                stadium_game: stadium     
            
              }      
    
              axios.post(`https://ofoot.club/api/v1/games/teams/${currentTeamId}/new`, data, config)
        
              .then(function (response) {
                addNotification('create-event-success');
                store.dispatch(updateData());
                store.dispatch(resetAddEventInput());
              })
              .catch(function (error) {
                addNotification()
              }); 
        
              break;
            }
      }
       

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default addEventMiddleware;
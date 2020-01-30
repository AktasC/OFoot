import axios from 'axios';

import { CREATE_TEAM, resetAddTeamInput } from '../reducer/team';
import { addNotification } from '../addNotification';
import { addTeam } from '../reducer/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_TEAM: {
      console.log('Yeaaah im in the middleware');
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');      
           
      const {
        teamNameValue,
        teamAddressValue,
        teamStadiumValue,    
        teamCityValue,    
      } = store.getState().team;

      

      let config = {        
        headers: { 'Authorization': `Bearer ${token}` }        
      }

      let data = {        
        address_team: teamAddressValue, 
        city_team: teamCityValue,           
        stadium_team: teamStadiumValue, 
        team_name: teamNameValue
      }      

      axios.post(`/api/v1/teams/user/${userId}/new`, data, config)

      .then(function (response) {
        addNotification('create-team-success');
        store.dispatch(addTeam());
        store.dispatch(resetAddTeamInput());
      })
      .catch(function (error) {
        addNotification('create-team-error')
      }); 

      break;
    } 

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

import axios from 'axios';

import { TEAM_INFOS_UPDATE } from '../reducer/team';
import { updateData } from '../reducer/user';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TEAM_INFOS_UPDATE: {
      console.log('Yeaaah im in the middleware');
      console.log(action);

      const token = localStorage.getItem('token');
      const teamId = store.getState().team.currentTeamId;    
           
      const {
        teamNameValue,
        teamAddressValue,
        teamStadiumValue,    
        teamCityValue,    
      } = action.value;      

      let config = {        
        headers: { 'Authorization': `Bearer ${token}` }        
      }

      let data = {        
        address_team: teamAddressValue, 
        city_team: teamCityValue,           
        stadium_team: teamStadiumValue, 
        team_name: teamNameValue
      }      

      axios.post(`/api/v1/teams/edit/${teamId}`, data, config)

      .then(function (response) {
        addNotification('modify-team-success');
        store.dispatch(updateData());        
      })
      .catch(function (error) {
        addNotification('modify-team-error')
      }); 
    }

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

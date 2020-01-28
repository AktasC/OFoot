import axios from 'axios';

import { CREATE_TEAM } from '../reducer/team';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_TEAM: {
      console.log('Yeaaah im in the middleware');
      const token = localStorage.getItem('token');      
      const {
        teamNameValue,
        teamAddressValue,
        teamStadiumValue,    
        teamCityValue,    
      } = store.getState().team;

      const {
        userId,
      } = store.getState().user

      let config = {
        method: 'post',
        url: '/api/v1/teams/new',
        headers: { 'Authorization': `Bearer ${token}` }        
      }

      let data = {        
        address_team: teamAddressValue, 
        city_team: teamCityValue,           
        stadium_team: teamStadiumValue, 
        team_name: teamNameValue,
        manager_team: Number(userId),
      }      

      axios.post('/api/v1/teams/new', data, config)

      .then(function (response) {
        console.log('from axios:', response.data); 
        
      })
      .catch(function (error) {
        console.log("error from appel appel axios:", error);
      }); 

      break;
    } 

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

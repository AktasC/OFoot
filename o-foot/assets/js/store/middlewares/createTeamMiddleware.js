import axios from 'axios';
import qs from 'qs';

import { CREATE_TEAM } from '../reducer/team';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_TEAM:
      console.log('Yeaaah im in the middleware');
      const token = localStorage.getItem('token');      
      const {
        teamNameValue,
        teamAddressValue,
        teamStadiumValue,    
        teamCityValue,    
      } = store.getState().team;

      axios({
        method: 'post',
        url: '/api/v1/teams/new',
        /* headers: { 'Authorization': `Bearer ${token}` } */
        data: {
          adress_team: teamAddressValue, 
          city_team: teamCityValue,           
          stadium_team: teamStadiumValue, 
          team_name: teamNameValue,
        }
      });

      .then(function (response) {
        console.log('from axios:', response.data); 
        
      })
      .catch(function (error) {
        console.log("error from appel appel axios:", error);
      });    

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

import axios from 'axios';

import { PLAYERS_INFOS } from '../reducer/team';

const teamMiddleWare = (store) => (next) => (action) => {

  switch (action.type) {    
    case PLAYERS_INFOS:
      const token = localStorage.getItem('token');
      const teamId = store.getState().team.teamId;
      
      axios({
        method: 'get',
        url: `/api/v1/teams/${teamId}/players`,
        headers: { 'Authorization': `Bearer ${token}` }       
      })
      
      .then(function (response) {
        console.log('from axios:', response.data); 
        /* const actionLoadInfo = loadInfoFromAxios(response.data);  
        store.dispatch(actionLoadInfo); */
      })
      .catch(function (error) {
        console.log("error from appel appel axios:", error);
      });         
      break;
    
    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default teamMiddleWare;
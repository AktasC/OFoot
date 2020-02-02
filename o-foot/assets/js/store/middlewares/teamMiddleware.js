import axios from 'axios';

import { PLAYERS_INFOS, INVITE_PLAYER, updatePlayersList } from '../reducer/team';

const teamMiddleWare = (store) => (next) => (action) => {

  switch (action.type) {    
    case PLAYERS_INFOS:
      const token = localStorage.getItem('token');
      const teamId = store.getState().team.currentTeamId;
      
      axios({
        method: 'get',
        url: `/api/v1/teams/${teamId}/players`,
        headers: { 'Authorization': `Bearer ${token}` }       
      })
      
      .then(function (response) {        
        const actionupdatePlayersList = updatePlayersList(response.data);  
        store.dispatch(actionupdatePlayersList);
      })
      .catch(function (error) {
        console.log("error from appel appel axios:", error);
      });         
      break;

    case INVITE_PLAYER:
      console.log('coucou depuis middleware:', action.value);

      /* const token = localStorage.getItem('token');
      const teamId = store.getState().team.currentTeamId;
      
      axios({
        method: 'get',
        url: `/api/v1/teams/${teamId}/players`,
        headers: { 'Authorization': `Bearer ${token}` }       
      })
      
      .then(function (response) {        
        const actionupdatePlayersList = updatePlayersList(response.data);  
        store.dispatch(actionupdatePlayersList);
      })
      .catch(function (error) {
        console.log("error from appel appel axios:", error);
      });         
      break; */
    
    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default teamMiddleWare;
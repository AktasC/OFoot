import axios from 'axios';

import { USER_PROFIL_INFO, loadInfoFromAxios } from '../reducer/userProfil';

const userProfilMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {    
    case USER_PROFIL_INFO:
      
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      console.log(userId);
      
      axios({
        method: 'get',
        url: `/api/v1/users/${userId}`,
        headers: { 'Authorization': `Bearer ${token}` }       
      })
      
      .then(function (response) {
        console.log('from axios:', response.data); 
        const actionLoadInfo = loadInfoFromAxios(response.data);  
        store.dispatch(actionLoadInfo);
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

export default userProfilMiddleWare;
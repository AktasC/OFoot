import axios from 'axios';

import { USER_PROFIL_INFO, loadInfoFromAxios } from '../reducer/userProfil';

const userProfilMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {    
    case USER_PROFIL_INFO:      
      console.log('coucou depuis le middleware');
      axios.get('/api/v1/users/13')
      
      .then(function (response) {
        console.log('from axios:', response.data); 
        const actionLoadInfo = loadInfoFromAxios(response.data);  
        store.dispatch(actionLoadInfo);
      })
      .catch(function (error) {
        console.log(error);
      });         
      break;    

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default userProfilMiddleWare;
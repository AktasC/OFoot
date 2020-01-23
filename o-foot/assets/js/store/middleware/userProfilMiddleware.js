import axios from 'axios';

import { USER_PROFIL_INFO } from '../reducer/userProfil';

const userProfilMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {    
    case USER_PROFIL_INFO:      
      console.log('coucou depuis le middleware');
      /* axios.post('http://localhost:8001/api/v1/users/25')
      
      .then(function (response) {
        console.log('from then', response);        
        
      })
      .catch(function (error) {
        console.log(error);
      }); 
    */   
      break;    

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default userProfilMiddleWare;
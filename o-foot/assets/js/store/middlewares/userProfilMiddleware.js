import axios from 'axios';

import { USER_PROFIL_INFO, loadInfoFromAxios, MODIFY_INFO  } from '../reducer/userProfil';

const userProfilMiddleWare = (store) => (next) => (action) => {
  
  const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      console.log(userId);

  switch (action.type) {    
    case USER_PROFIL_INFO:
      
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
    
    case MODIFY_INFO:

      const {
        first_name,
        last_name,
        email,
        picture_user
      } = store.getState().userProfil.userInformations;
      
      axios({
        method: 'post',
        url: `/api/v1/users/edit/${userId}`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
          first_name: first_name,
          email: email, 
          last_name: last_name,
          picture_user: picture_user,
          birthdate: null, 
        }      
      })
      
      .then(function (response) {
        console.log('from axios modify:', response.data); 
        /*const actionLoadInfo = loadInfoFromAxios(response.data);  
        store.dispatch(actionLoadInfo)*/;
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
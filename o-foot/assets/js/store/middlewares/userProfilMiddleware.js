import axios from 'axios';
import qs from 'qs';

import { USER_PROFIL_INFO, loadInfoFromAxios, MODIFY_INFO, changesDone  } from '../reducer/userProfil';
import { addNotification } from '../addNotification';

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
        firstname,
        lastname,
        email,
        pictureuser
      } = store.getState().userProfil;
      
      axios({
        method: 'post',
        url: `/api/v1/users/edit/${userId}`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
          first_name: firstname,
          email: email, 
          last_name: lastname,
          picture_user: pictureuser,
          birthdate: null, 
        }      
      })
      
      .then(function (response) { 
        console.log(response.config.data);
        store.dispatch(changesDone(response.config.data));
        addNotification('change-done');
      })
      .catch(function (error) {
        addNotification('change-not-done');
      });         
      break;
    
    
    

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default userProfilMiddleWare;
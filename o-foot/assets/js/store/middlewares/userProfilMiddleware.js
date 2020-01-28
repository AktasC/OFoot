import axios from 'axios';
import qs from 'qs';

import { USER_PROFIL_INFO, loadInfoFromAxios, MODIFY_INFO, SUBMIT_CHANGE_PASSWORD, changePasswordDone  } from '../reducer/userProfil';
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
        addNotification('change-done');
      })
      .catch(function (error) {
        addNotification('change-not-done');
      });         
      break;

      case SUBMIT_CHANGE_PASSWORD:

        const {
          new_password,
        } = store.getState().userProfil;
        
        axios({
          method: 'post',
          url: `/api/v1/users/edit/password/${userId}`,
          headers: { 'Authorization': `Bearer ${token}` },
          data: {
            password: new_password,
          }      
        })
        
        .then(function (response) { 
          console.log(response);
          addNotification('change-done');
          store.dispatch(changePasswordDone());
        })
        .catch(function (error) {
          console.log(error); 
          addNotification('change-not-done');
        });         
        break;
    
    
    

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default userProfilMiddleWare;
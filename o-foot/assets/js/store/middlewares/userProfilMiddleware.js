import axios from 'axios';
import qs from 'qs';

import { USER_PROFIL_INFO, loadInfoFromAxios, MODIFY_INFO, SUBMIT_CHANGE_PASSWORD, emptyInputs, CALENDAR_INFO  } from '../reducer/userProfil';
import { modifyPassword } from '../reducer/loginForm'
import { addNotification } from '../addNotification';
import { loadInfoCalendarFromAxios } from '../reducer/calendar';

const userProfilMiddleWare = (store) => (next) => (action) => {

  const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

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
          addNotification('change-done');
          store.dispatch(emptyInputs());
          store.dispatch(modifyPassword(action.value));
        })
        .catch(function (error) {
          addNotification('change-not-done');
          store.dispatch(emptyInputs());
        });         
        break;

      case CALENDAR_INFO :
      console.log('calendar info')
      axios({
        method: 'get',
        url: `/api/v1/events`,
        headers: { 'Authorization': `Bearer ${token}` }       
      })
      
      .then(function (response) { 
        // séparation des objets   
        const eventDataGames = response.data[0];
        const eventDataPractices = response.data[1]; 

        // modification key date_time_game/practice
        const objectRenameKeys = require('object-rename-keys');

        var changes = {
	        date_time_game: 'date_time',
        };

        const eventDataGamesRename = objectRenameKeys(eventDataGames, changes);

        var changesPractice = {
        	date_time_practice: 'date_time',
        };

        const eventDataPracticesRename = objectRenameKeys(eventDataPractices, changesPractice);

        // Fusion des objets
        const eventDataMix = eventDataGamesRename.concat(eventDataPracticesRename);

        //classement par ordre chronologique
        const eventDataMixChronological = eventDataMix.sort(function (a, b) {
          if (a.date_time > b.date_time) return 1;
          if (a.date_time < b.date_time) return -1;
          return 0;
        });
        
        // filtrer par team_id
        const events = eventDataMixChronological.filter(event => event.team_id = 9);
        console.log(events);
        const actionLoadInfoCalendar = loadInfoCalendarFromAxios(events);  
        store.dispatch(actionLoadInfoCalendar);

        
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
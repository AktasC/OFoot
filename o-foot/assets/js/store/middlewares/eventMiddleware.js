import axios from 'axios';

import { CALENDAR_INFO, loadInfoCalendarFromAxios } from '../reducer/calendar';

const eventMiddleWare = (store) => (next) => (action) => {

  const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

  switch (action.type) {    
 
      case CALENDAR_INFO :
      console.log('calendar info')
      axios({
        method: 'get',
        url: `https://ofoot.club/api/v1/events`,
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
        // const events = eventDataMixChronological.filter(event => event.team_id = 9);
        // console.log(events);
        const actionLoadInfoCalendar = loadInfoCalendarFromAxios(eventDataMixChronological);  
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

export default eventMiddleWare;
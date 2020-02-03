import axios from 'axios';

import { CALENDAR_INFO, loadInfoCalendarFromAxios } from '../reducer/calendar';

const eventMiddleWare = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  switch (action.type) {
    case CALENDAR_INFO:
      const { currentTeamId } = store.getState().team;

      axios({
        method: 'get',
        url: `/api/v1/events/team/${currentTeamId}`,
        headers: { Authorization: `Bearer ${token}` },
      })

        .then((response) => {
        // séparation des objets
          console.log(response);
          const eventDataGames = response.data[0];
          const eventDataPractices = response.data[1];

          // modification key date_time_game/practice
          const objectRenameKeys = require('object-rename-keys');

          const changes = {
	        date_time_game: 'date_time',
          };

          const eventDataGamesRename = objectRenameKeys(eventDataGames, changes);

          const changesPractice = {
        	date_time_practice: 'date_time',
          };

          const eventDataPracticesRename = objectRenameKeys(eventDataPractices, changesPractice);

          // Fusion des objets
          const eventDataMix = eventDataGamesRename.concat(eventDataPracticesRename);

          // classement par ordre chronologique
          const eventDataMixChronological = eventDataMix.sort((a, b) => {
            if (a.date_time > b.date_time) return 1;
            if (a.date_time < b.date_time) return -1;
            return 0;
          });

          // filtrer par team_id
          // const event = eventDataMixChronological.filter(x => x.team_id === 15);
          const actionLoadInfoCalendar = loadInfoCalendarFromAxios(eventDataMixChronological);
          store.dispatch(actionLoadInfoCalendar);
        })
        .catch((error) => {
          console.log('error from appel appel axios:', error);
        });
      break;

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default eventMiddleWare;

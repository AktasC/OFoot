import axios from 'axios';

import { ADD_NEW_EVENT, resetAddEventInput } from '../reducer/event';
import { addNotification } from '../addNotification';
import { updateData } from '../reducer/user';
import { teamCalendarInfo } from '~/store/reducer/calendar';

const addEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEW_EVENT: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      const {
        selectedOption,
        selectedOptionMatch,
        opponent,
        date_time,
        stadium,
        adress,
      } = store.getState().event;

      const {
        currentTeamId,
      } = store.getState().team;


      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (selectedOption === 'entrainement') {
        const data = {
          address_practice: adress,
          date_time_practice: date_time,
          presence_practice: null,
          stadium_practice: stadium,
        };

        axios.post(`/api/v1/practices/teams/${currentTeamId}/new`, data, config)

          .then((response) => {
            addNotification('create-event-success');
            store.dispatch(updateData());
            store.dispatch(resetAddEventInput());
            store.dispatch(teamCalendarInfo());
          })
          .catch((error) => {
            addNotification();
          });

        break;
      }

      if (selectedOption === 'match') {
        const data = {
          address_game: adress,
          date_time_game: date_time,
          domicile_exterieur: selectedOptionMatch,
          opponent_team: opponent,
          stadium_game: stadium,

        };

        axios.post(`/api/v1/games/teams/${currentTeamId}/new`, data, config)

          .then((response) => {
            addNotification('create-event-success');
            store.dispatch(updateData());
            store.dispatch(resetAddEventInput());
            store.dispatch(teamCalendarInfo());
          })
          .catch((error) => {
            addNotification();
          });

        break;
      }
    }


    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default addEventMiddleware;

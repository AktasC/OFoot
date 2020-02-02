import axios from 'axios';

import { CREATE_TEAM, resetAddTeamInput } from '../reducer/team';
import { addNotification } from '../addNotification';
import { updateData } from '../reducer/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_TEAM: {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      const {
        teamNameValue,
        teamAddressValue,
        teamStadiumValue,
        teamCityValue,
      } = store.getState().team;


      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const data = {
        address_team: teamAddressValue,
        city_team: teamCityValue,
        stadium_team: teamStadiumValue,
        team_name: teamNameValue,
      };

      axios.post(`/api/v1/teams/user/${userId}/new`, data, config)

        .then((response) => {
          addNotification('create-team-success');
          store.dispatch(updateData());
          store.dispatch(resetAddTeamInput());
        })
        .catch((error) => {
          addNotification('create-team-error');
        });

      break;
    }

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

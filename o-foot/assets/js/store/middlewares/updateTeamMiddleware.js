import axios from 'axios';

import { TEAM_INFOS_UPDATE } from '../reducer/team';
import { updateData } from '../reducer/user';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TEAM_INFOS_UPDATE: {

      const token = localStorage.getItem('token');
      const teamId = store.getState().team.currentTeamId;

      const {
        team_name,
        address_team,
        stadium_team,
        city_team,
      } = action.value;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const data = {
        address_team,
        city_team,
        stadium_team,
        team_name,
      };

      axios.post(`/api/v1/teams/edit/${teamId}`, data, config)

        .then((response) => {
          addNotification('modify-team-success');
          store.dispatch(updateData());
        })
        .catch((error) => {
          addNotification('modify-team-error');
        });
      break;
    }

    default: {
      // par défaut, je laisse passer l'action
      next(action);
    }
  }
};

export default registerMiddleware;

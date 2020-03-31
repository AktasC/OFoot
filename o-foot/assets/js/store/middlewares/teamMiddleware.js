import axios from 'axios';

import { CREATE_TEAM, PLAYERS_INFOS, INVITE_PLAYER, updatePlayersList } from '../reducer/team';
import { updateData } from '../reducer/user';

import { addNotification } from '../addNotification';

const teamMiddleWare = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
  const teamId = store.getState().team.currentTeamId;

  switch (action.type) {
    case CREATE_TEAM: {
      const userId = localStorage.getItem('userId');

      const {
        teamName,
        teamAddress,
        teamStadium,
        teamCity,
      } = action.value;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const data = {
        address_team: teamAddress,
        city_team: teamCity,
        stadium_team: teamStadium,
        team_name: teamName,
      };

      axios.post(`/api/v1/teams/user/${userId}/new`, data, config)

        .then((response) => {
          addNotification('create-team-success');
          store.dispatch(updateData());
        })
        .catch((error) => {
          addNotification('create-team-error');
        });

      break;
    }

    case PLAYERS_INFOS: {
      axios({
        method: 'get',
        url: `/api/v1/teams/${teamId}/players`,
        headers: { Authorization: `Bearer ${token}` },
      })

        .then((response) => {
          const actionupdatePlayersList = updatePlayersList(response.data);
          store.dispatch(actionupdatePlayersList);
        })
        .catch((error) => {
          console.log('error from appel appel axios:', error);
        });
      break;
    }

    case INVITE_PLAYER: {
      axios({
        method: 'post',
        url: `/api/v1/teams/${teamId}/invite`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          email: action.value,
        },
      })

        .then((response) => {
          addNotification('invite-player-success');
        })
        .catch((error) => {
          console.log('error from appel appel axios:', error);
        });
      break;
    }

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default teamMiddleWare;

import axios from 'axios';

import { USER_PROFIL_INFO, USER_INFOS_UPDATE, loadInfoFromAxios, CHANGE_PASSWORD } from '../reducer/userProfil';
import { addNotification } from '../addNotification';
import { updateData, IS_MANAGER,  updateIsManager } from '../reducer/user';


const userProfilMiddleWare = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const teamId = store.getState().team.currentTeamId;

  switch (action.type) {
    case USER_PROFIL_INFO: {
      axios({
        method: 'get',
        url: `/api/v1/users/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
      })

        .then((response) => {
          const actionLoadInfo = loadInfoFromAxios(response.data);
          store.dispatch(actionLoadInfo);
        })
        .catch((error) => {
          console.log('error from appel appel axios:', error);
        });
      break;
    }

    case USER_INFOS_UPDATE: {
      // eslint-disable-next-line no-case-declarations
      const {
        first_name,
        last_name,
        email,
      } = action.value;

      axios({
        method: 'post',
        url: `/api/v1/users/edit/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          first_name,
          email,
          last_name,
        },
      })

        .then((response) => {
          store.dispatch(updateData());
          addNotification('change-done');
        })
        .catch((error) => {
          addNotification('change-not-done');
        });
      break;
    }

    case CHANGE_PASSWORD: {
      const email = store.getState().userProfil.userInformations.email;
      const actualPwd = action.value.actualPwd;
      const newPwd = action.value.newPwd;

      axios.post('/api/login_check', {
        username: email,
        password: actualPwd,
      })
        .then(() => {
          axios({
            method: 'post',
            url: `/api/v1/users/edit/password/${userId}`,
            headers: { Authorization: `Bearer ${token}` },
            data: {
              password: newPwd,
            },
          })
            .then(() => {
              addNotification('change-done');
            })
            .catch(() => {
              addNotification('change-not-done');
            });
        })
        .catch(() => {
          addNotification('modify-pwd-not-allowed');
        });
      break;
    }

    case IS_MANAGER: {
      axios({
        method: 'get',
        url: `/api/v1/teams/${teamId}/manager`,
        headers: { Authorization: `Bearer ${token}` },
      })

        .then((response) => {
          const actionUpdateIsManager = updateIsManager(response.data);
          store.dispatch(actionUpdateIsManager);
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

export default userProfilMiddleWare;

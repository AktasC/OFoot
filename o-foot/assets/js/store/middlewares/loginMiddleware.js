import axios from 'axios';
import { CONNECT_USER } from '../reducer/loginForm';
import { logUser, updateToken } from '../reducer/user';
import { addNotification } from '../addNotification';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      const {
        emailValue,
        passwordValue,
      } = store.getState().loginForm;

      const token = localStorage.getItem('token');

      axios.post('/api/login_check', {
        username: emailValue,
        password: passwordValue,
      })
        .then((response) => {
          store.dispatch(updateToken(response.data.token));
          localStorage.setItem('token', response.data.token);

          axios({
            method: 'post',
            url: '/api/login',
            headers: { Authorization: `Bearer ${token}` },
            data: {
              email: emailValue,
              password: passwordValue,
            },
          })
            .then((response) => {
              store.dispatch(logUser(response.data.user));
              localStorage.setItem('userId', response.data.user);
            })
            .catch((error) => {
              console.log(error);
            });

          addNotification('login-success');
        })

        .catch((error) => {
          addNotification('login-error');
        });

      break;

    default:
      next(action);
  }
};

export default loginMiddleware;

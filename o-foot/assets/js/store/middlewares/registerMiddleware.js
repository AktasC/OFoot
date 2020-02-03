import axios from 'axios';
import qs from 'qs';

import { REGISTER_USER, signupDone } from '../reducer/registerForm';
import { addNotification } from '../addNotification';

// CSRF Implementation #TODO
// import getCSRF from 'Utils/getCsrf';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER:
      const {
        inputLastnameValue,
        inputFirstnameValue,
        inputEmailValue,
        inputPasswordValue,
      } = store.getState().registerForm;

      const requestBody = {
        'registration_form[last_name]': inputLastnameValue,
        'registration_form[first_name]': inputFirstnameValue,
        'registration_form[email]': inputEmailValue,
        'registration_form[password]': inputPasswordValue,
        /* 'registration_form[_token]': getCSRF() */
      };

      // JWT Implementation #TODO
      // const checkBody = {
      //   'username': inputEmailValue,
      //   'password': inputPasswordValue,
      // }

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      // JWT Implementation #TODO
      // axios.post('http://localhost:8001/api/login_check', { checkBody })
      // .then(function (response) {

      // })
      axios.post('/api/register', qs.stringify(requestBody), config)
        .then((response) => {
          store.dispatch(signupDone());
          addNotification('register-success');
        })
        .catch((error) => {
          addNotification('register-error');
        });
      break;

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

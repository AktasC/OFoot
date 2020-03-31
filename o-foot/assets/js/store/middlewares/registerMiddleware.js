import axios from 'axios';
import qs from 'qs';

import { REGISTER_USER, signupDone } from '../reducer/registerForm';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const {
        lastname,
        firstname,
        email,
        password,
      } = action.value;

      const requestBody = {
        'registration_form[last_name]': lastname,
        'registration_form[first_name]': firstname,
        'registration_form[email]': email,
        'registration_form[password]': password,
      };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      axios.post('/api/register', qs.stringify(requestBody), config)
        .then((response) => {
          store.dispatch(signupDone());
          addNotification('register-success');
        })
        .catch((error) => {
          addNotification('register-error');
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

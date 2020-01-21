import axios from 'axios';
import qs from 'qs';

import { REGISTER_USER } from '../reducer/registerForm';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER:
      console.log("je vais faire l'appel à l'API");
      console.log(store.getState().registerForm);

      const requestBody = {
        'registration_form[last_name]': 'Fred',
        'registration_form[first_name]': 'Flintstone',
        'registration_form[email]': 'toto@toto.com',
        'registration_form[password]': '123456',
      }      
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      
      axios.post('http://localhost:8001/api/v1/register', qs.stringify(requestBody), config)
      
      .then(function (response) {
        console.log(response);
        console.log('register via api bien passé');
      })
      .catch(function (error) {
        console.log(error);
        console.log('register via api dans le mal');
      });      
      break;   

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

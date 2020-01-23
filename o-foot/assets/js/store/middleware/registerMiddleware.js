import axios from 'axios';
import qs from 'qs';

import { REGISTER_USER, signupDone } from '../reducer/registerForm';
import { addNotification } from '../addNotification';

const registerMiddleware = (store) => (next) => (action) => {

  switch (action.type) {    
    case REGISTER_USER: 
      const {
        inputLastnameValue,
        inputFirstnameValue,
        inputEmailValue,
        inputPasswordValue
      } = store.getState().registerForm;  
      
      const requestBody = {
        'registration_form[last_name]': inputLastnameValue,
        'registration_form[first_name]': inputFirstnameValue,
        'registration_form[email]': inputEmailValue,
        'registration_form[password]': inputPasswordValue,
      }      
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      
      axios.post('http://localhost:8001/api/v1/register', qs.stringify(requestBody), config)
      
      .then(function (response) {
        console.log('from then');        
        store.dispatch(signupDone());
        addNotification('success');
      })
      .catch(function (error) {
        console.log(error);
        addNotification('error');
      });      
      break;   

    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default registerMiddleware;

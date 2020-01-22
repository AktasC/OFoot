import axios from 'axios';
import qs from 'qs';
import { CONNECT_USER } from '../reducer/loginForm';
import { logUser } from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
       /* const {
            EmailValue,
            PasswordValue,
            }=store.getState().loginForm;

            const requestBody = {
                'login_form[email]': EmailValue,
                'login_form[password]': PasswordValue,
              }
              const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }
            
              axios.post('http://localhost:8001/api/v1/login', qs.stringify(requestBody), config)

              .then(function (response) {*/
                console.log('soumission');        
                const actionLogUser = logUser();
                store.dispatch(actionLogUser);
            /*  })
              .catch(function (error) {
                console.log(error);
              }); */ 

    
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
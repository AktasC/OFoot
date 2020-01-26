import axios from 'axios';
import qs from 'qs';
import { CONNECT_USER } from '../reducer/loginForm';
import { logUser, updateToken} from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      const {
        EmailValue,
        PasswordValue,
      }=store.getState().loginForm;

      axios.post('/api/login_check', {
        username: EmailValue,
        password: PasswordValue
      })
      .then( (response) => {
        store.dispatch(updateToken(response.data.token));             
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.post('/api/login', {
        email: EmailValue,
        password: PasswordValue
      })
      .then(function (response) {                
        store.dispatch(logUser(response.data.user));
      })
      .catch(function (error) {
        console.log(error);
      });  
      break;

    default:
    next(action);
    }
};

export default loginMiddleware;

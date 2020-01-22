import axios from 'axios';
import { CONNECT_USER } from '../reducer/loginForm';
import { logUser } from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER:
      console.log('soumission');
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
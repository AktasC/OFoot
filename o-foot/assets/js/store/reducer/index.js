import { combineReducers } from 'redux';

// j'importe mes reducers
import registerForm from './registerForm';
import loginForm from './loginForm';
import user from './user';
import userProfil from './userProfil';

// je veux combiner mes reducers en un seul, puisque le store gère un seul reducer
const reducer = combineReducers({
  registerForm,
  loginForm,
  user,
  userProfil,
});

export default reducer;

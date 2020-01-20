import { combineReducers } from 'redux';

// j'importe mes reducers
import registerForm from './registerForm';


// je veux combiner mes reducers en un seul, puisque le store gère un seul reducer
const reducer = combineReducers({
  registerForm,
});

export default reducer;

// import npm : createStore
import { createStore, applyMiddleware, compose } from 'redux';

import userProfilMiddleware from '../store/middlewares/userProfilMiddleware';

// import reducer(s)
import reducer from './reducer';

// eslint-disable-next-line no-underscore-dangle
// https://github.com/zalmoxisus/redux-devtools-extension
// code complexe : plomberie pour redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Améliorations pour le store
const enhancers = composeEnhancers(
  applyMiddleware(
   userProfilMiddleware,
  ),
);

// Création du store
const store = createStore(
  reducer,
  enhancers,
);

// Export
export default store;

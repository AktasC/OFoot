// import npm : createStore
import { createStore, applyMiddleware, compose } from 'redux';

// import reducer(s)
import reducer from './reducer';

import registerMiddleware from './middlewares/registerMiddleware';
import loginMiddleware from './middlewares/loginMiddleware';
import userProfilMiddleware from './middlewares/userProfilMiddleware';
import createTeamMiddleware from './middlewares/createTeamMiddleware';
import teamMiddleWare from './middlewares/teamMiddleware';
import updateTeamMiddleware from './middlewares/updateTeamMiddleware';

// eslint-disable-next-line no-underscore-dangle
// https://github.com/zalmoxisus/redux-devtools-extension
// code complexe : plomberie pour redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Améliorations pour le store
const enhancers = composeEnhancers(
  applyMiddleware(
   userProfilMiddleware,
   loginMiddleware,
   registerMiddleware,
   createTeamMiddleware,
   teamMiddleWare,
   updateTeamMiddleware,
  ),
);

// Création du store
const store = createStore(
  reducer,
  enhancers,
);

// Export
export default store;

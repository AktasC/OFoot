import axios from 'axios';


const calendarMiddleware = (store) => (next) => (action) => {
  switch (action.type) {


    default:
      // par défaut, je laisse passer l'action
      next(action);
  }
};

export default calendarMiddleware;

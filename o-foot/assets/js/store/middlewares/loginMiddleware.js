import axios from 'axios';
import qs from 'qs';
import { CONNECT_USER } from '../reducer/loginForm';
import { logUser } from '../reducer/user';

const loginMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case CONNECT_USER:
            const {
                EmailValue,
                PasswordValue,
            }=store.getState().loginForm;

            axios.post('/api/login', {
                email: EmailValue,
                password: PasswordValue
            })
            .then(function (response) {
                console.log(response.data.user);
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

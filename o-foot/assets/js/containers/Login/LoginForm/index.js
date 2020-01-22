import { connect } from 'react-redux';

import LoginForm from '../../../components/Page/Login/LoginForm';

import { onChangeInputEmail, onChangeInputPassword } from '../../../store/reducer/loginForm';

import { connectUser } from '../../../store/reducer/user';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    email: state.loginForm.EmailValue,
    password: state.loginForm.PasswordValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeInputEmail: (value) => {
    const action = onChangeInputEmail(value);
    dispatch(action);
  },

  changeInputPassword: (value) => {
    const action = onChangeInputPassword(value);
    dispatch(action);
  },

  submitForm: () => {
    const action = connectUser();
    dispatch(action);
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;

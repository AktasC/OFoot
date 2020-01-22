import { connect } from 'react-redux';

import LoginForm from '../../components/Page/Login/LoginForm';

import { onChangeInputEmailLogin, onChangeInputPasswordLogin, connectUser } from '../../store/reducer/loginForm';

// import { connectUser } from '../../store/reducer/user';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    email: state.loginForm.EmailValue,
    password: state.loginForm.PasswordValue,
    emailErrors: state.loginForm.EmailErrors
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeInputEmailLogin: (value) => {
    const action = onChangeInputEmailLogin(value);
    dispatch(action);
  },

  changeInputPasswordLogin: (value) => {
    const action = onChangeInputPasswordLogin(value);
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

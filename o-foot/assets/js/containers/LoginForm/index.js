import { connect } from 'react-redux';

import LoginForm from '../../components/Page/Login/LoginForm';

import { onChangeInputEmail, onChangeInputPassword } from '../../store/reducer/loginForm';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    email: state.loginForm.inputEmailValue,
    password: state.loginForm.inputPasswordValue,
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
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;

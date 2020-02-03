import { connect } from 'react-redux';

import {
  checkValidity,
  checkEmptiness,
  checkValidityPassword,
} from 'Utils/validation';
import LoginForm from '~/components/Page/Login/LoginForm';

import {
  onChangeInputLogin,
  connectUser,
  emailInvalid,
  emailValid,
  passwordlInvalid,
  passwordValid,
  dontConnectUser,
} from '~/store/reducer/loginForm';


const mapStateToProps = (state) => ({
  emailValue: state.loginForm.emailValue,
  passwordValue: state.loginForm.passwordValue,
  emailValidCheck: state.loginForm.emailValidCheck,
  errorMessageEmail: state.loginForm.errorMessageInvalidEmail,
  passwordValidCheck: state.loginForm.passwordValidCheck,
  errorMessagePassword: state.loginForm.errorMessageInvalidPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputLogin: (value, name) => {
    const action = onChangeInputLogin(value, name);
    dispatch(action);
  },

  submitForm: () => {
    const action = connectUser();
    dispatch(action);
  },

  emptyInputs: () => {
    const action = dontConnectUser();
    dispatch(action);
  },

  blurInputEmail: (value) => {
    const errorsEmail = checkValidity(value);
    if (checkEmptiness(errorsEmail) === false) {
      const action = emailInvalid(errorsEmail);
      dispatch(action);
    } else if (checkEmptiness(errorsEmail) === true) {
      const action = emailValid();
      dispatch(action);
    }
  },

  blurInputPassword: (value) => {
    const errorsPassword = checkValidityPassword(value);
    if (checkEmptiness(errorsPassword) === false) {
      const action = passwordlInvalid(errorsPassword);
      dispatch(action);
    } else if (checkEmptiness(errorsPassword) === true) {
      const action = passwordValid();
      dispatch(action);
    }
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;

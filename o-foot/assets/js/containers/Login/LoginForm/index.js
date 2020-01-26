import { connect } from 'react-redux';

import LoginForm from '../../../components/Page/Login/LoginForm';

import {
  onChangeInputEmailLogin,
  onChangeInputPasswordLogin,
  connectUser,
  emailInvalid,
  emailValid,
  passwordlInvalid,
  passwordValid,
  dontConnectUser
} from '../../../store/reducer/loginForm';

import {
  checkValidity,
  checkEmptiness,
  checkValidityPassword,
} from '../../../../utils/validation';

const mapStateToProps = (state) => {
  return {
    email: state.loginForm.EmailValue,
    password: state.loginForm.PasswordValue,
    EmailValidCheck: state.loginForm.EmailValidCheck,
    errorMessageEmail: state.loginForm.ErrorMessageInvalidEmail,
    PasswordValidCheck: state.loginForm.PasswordValidCheck,
    errorMessagePassword: state.loginForm.ErrorMessageInvalidPassword,
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

  emptyInputs: () => {
    const action = dontConnectUser();
    dispatch(action)
  },

  blurInputEmail: (value) => {
    const errorsEmail = checkValidity(value);
    if (checkEmptiness(errorsEmail) === false) {
      const action = emailInvalid(errorsEmail);
      dispatch(action);
    }
    else if (checkEmptiness(errorsEmail) === true) {
      const action = emailValid();
      dispatch(action);
    }
  },

  blurInputPassword: (value) => {
    const errorsPassword = checkValidityPassword(value);
    if (checkEmptiness(errorsPassword) === false) {
      const action = passwordlInvalid(errorsPassword);
      dispatch(action);
    }
    else if (checkEmptiness(errorsPassword) === true) {
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

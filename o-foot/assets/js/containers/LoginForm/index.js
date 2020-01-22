import { connect } from 'react-redux';

import LoginForm from '../../components/Page/Login/LoginForm';

import { onChangeInputEmailLogin, onChangeInputPasswordLogin, connectUser, emailInvalid, emailValid } from '../../store/reducer/loginForm';

export const checkValidity = (email) => {
  const errors = {};
  if (!email) {
    errors.email = 'Merci de renseigner votre adresse email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'L\'adresse email saisie est invalide'
  }
  return errors;
};

export const checkEmptiness = (table) => {
  if (Object.keys(table).length === 0){
    return true;
  } else {
    return false; 
  }
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    email: state.loginForm.EmailValue,
    password: state.loginForm.PasswordValue,
    EmailValidCheck: state.loginForm.EmailValidCheck,
    errorMessageEmail: state.loginForm.ErrorMessageInvalidEmail
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

  blurInputEmail: (value) => {
    const errorsEmail= checkValidity(value);  
    if (checkEmptiness(errorsEmail)===false){
      const action = emailInvalid(errorsEmail); 
      dispatch(action);
      console.log('Non, il faut afficher une erreur')
    } else if (checkEmptiness(errorsEmail)===true) {
      console.log('C\' est ok on passe');
      const action = emailValid(); 
      dispatch(action);
    }
  }
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;

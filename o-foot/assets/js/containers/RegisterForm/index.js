import { connect } from 'react-redux';

import RegisterForm from '../../components/Page/Register/RegisterForm';

import {
  changeInput,
  registerUser,
  LastNameInvalid,
  LastNameValid,
  FirstNameInvalid,
  FirstNameValid,
  emailRegisterInvalid,
  emailRegisterValid,
  PasswordRegisterInvalid,
  PasswordRegisterValid,
  dontRegisterUser,
} from '../../store/reducer/registerForm';

import {
  isInputEmpty,
  isInputEmptyFirstname,
  checkEmptiness,
  checkValidity,
  checkValidityPassword,
} from '../../../utils/validation';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputLastnameValue: state.registerForm.inputLastnameValue,
    inputFirstnameValue: state.registerForm.inputFirstnameValue,
    inputEmailValue: state.registerForm.inputEmailValue,
    inputPasswordValue: state.registerForm.inputPasswordValue,
    LastnameValidCheck: state.registerForm.LastnameValidCheck,
    ErrorMessageInvalidLastname: state.registerForm.ErrorMessageInvalidLastname,
    FirstnameValidCheck: state.registerForm.FirstnameValidCheck,
    ErrorMessageInvalidFirstname: state.registerForm.ErrorMessageInvalidFirstname,
    EmailRegisterValidCheck: state.registerForm.EmailRegisterValidCheck,
    ErrorMessageInvalidEmailRegister: state.registerForm.ErrorMessageInvalidEmailRegister,
    PasswordRegisterValidCheck: state.registerForm.PasswordRegisterValidCheck,
    ErrorMessageInvalidPasswordRegister: state.registerForm.ErrorMessageInvalidPasswordRegister,
    meta: state.registerForm.meta,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (value, name) => {
    /* console.log('je suis dans le container'); */
    const action = changeInput(value, name);
    dispatch(action);
  },

  submitFormRegister: () => {
    const action = registerUser();
    dispatch(action);
  },

  emptyInputsRegister: () => {
    const action = dontRegisterUser();
    dispatch(action);
  },

  blurInputLastName: (value) => {
    const errorLastName = isInputEmpty(value);
    if (checkEmptiness(errorLastName) === false) {
      const action = LastNameInvalid(errorLastName);
      dispatch(action);
    }
    else if (checkEmptiness(errorLastName) === true) {
      const action = LastNameValid();
      dispatch(action);
    }
  },

  blurInputFirstName: (value) => {
    const errorFirstName = isInputEmptyFirstname(value);
    if (checkEmptiness(errorFirstName) === false) {
      const action = FirstNameInvalid(errorFirstName);
      dispatch(action);
    }
    else if (checkEmptiness(errorFirstName) === true) {
      const action = FirstNameValid();
      dispatch(action);
    }
  },

  blurInputEmailRegister: (value) => {
    const errorsEmail = checkValidity(value);
    if (checkEmptiness(errorsEmail) === false) {
      const action = emailRegisterInvalid(errorsEmail);
      dispatch(action);
    }
    else if (checkEmptiness(errorsEmail) === true) {
      const action = emailRegisterValid();
      dispatch(action);
    }
  },

  blurInputPasswordRegister: (value) => {
    const errorsPassword = checkValidityPassword(value);
    if (checkEmptiness(errorsPassword) === false) {
      const action = PasswordRegisterInvalid(errorsPassword);
      dispatch(action);
    }
    else if (checkEmptiness(errorsPassword) === true) {
      const action = PasswordRegisterValid();
      dispatch(action);
    }
  },

});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);

export default RegisterFormContainer;

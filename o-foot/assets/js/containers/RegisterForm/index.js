import { connect } from 'react-redux';

import RegisterForm from '../../components/Page/Register/RegisterForm';

import { changeInput } from '../../store/reducer/registerForm';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputLastnameValue: state.registerForm.inputLastnameValue,
    inputFirstnameValue: state.registerForm.inputFirstnameValue,
    inputMailValue: state.registerForm.inputMailValue,
    inputPasswordValue: state.registerForm.inputPasswordValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (value, name) => {
    /* console.log('je suis dans le container'); */
    const action = changeInput(value, name);
    dispatch(action);
  },
  onSubmit: (event) => {
    event.preventDefault();
    console.log('form envoyé depuis containers:');
    /* const action = registerUser();
    dispatch(action); */
  }
});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);

export default RegisterFormContainer;

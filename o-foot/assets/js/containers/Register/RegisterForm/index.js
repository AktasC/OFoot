import { connect } from 'react-redux';

import RegisterForm from '~/components/Page/Register/RegisterForm';

import { registerUser } from '~/store/reducer/registerForm';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  submitForm: (value) => {
    const action = registerUser(value);
    dispatch(action);
  },
});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);

export default RegisterFormContainer;

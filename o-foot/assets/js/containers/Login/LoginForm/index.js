import { connect } from 'react-redux';

import LoginForm from '~/components/Page/Login/LoginForm';

import { connectUser } from '~/store/reducer/loginForm';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (value) => {
    const action = connectUser(value);
    dispatch(action);
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormContainer;

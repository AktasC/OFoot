import { connect } from 'react-redux';

import Login from '../../components/Page/Login';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    signupDone: state.registerForm.signupDone,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;

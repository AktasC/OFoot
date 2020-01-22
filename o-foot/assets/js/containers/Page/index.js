import { connect } from 'react-redux';

import Page from '../../components/Page';

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
    signupDone: state.registerForm.signupDone,
  };
};

const mapDispatchToProps = {};

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;
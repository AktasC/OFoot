import { connect } from 'react-redux';

import Header from '../../components/Header';

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

const mapDispatchToProps = {};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
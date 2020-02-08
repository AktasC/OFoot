import { connect } from 'react-redux';

import Header from '~/components/Header';

import { disconnectUser } from '~/store/reducer/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    console.log('deco en cours');
    const action = disconnectUser();
    dispatch(action);
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;

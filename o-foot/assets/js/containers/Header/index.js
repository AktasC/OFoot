import { connect } from 'react-redux';

import Header from '~/components/Header';

import { disconnectUser } from '~/store/reducer/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  currentTeamId: state.team.currentTeamId,
});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    const action = disconnectUser();
    dispatch(action);
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;

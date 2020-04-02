import { connect } from 'react-redux';

import List from '~/components/Page/Players/List';

import { invitePlayer } from '~/store/reducer/team';

const mapStateToProps = (state) => ({
  playersList: state.team.playersList,
  currentTeamId: state.team.currentTeamId,
  isManager: state.user.isManager,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = invitePlayer(value);
    dispatch(action);
  },
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;

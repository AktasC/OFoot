import { connect } from 'react-redux';

import List from '../../../../components/Page/Players/List';

import { playersInfos, invitePlayer } from '../../../../store/reducer/team';

const mapStateToProps = (state) => ({
  playersList: state.team.playersList,
  teamId: state.team.teamId,
  currentTeamId: state.team.currentTeamId,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlayersList: () => {
    const action = playersInfos();
    dispatch(action);
  },
  handleSubmitInvitePlayer: (value) => {
    const action = invitePlayer(value);
    dispatch(action);
  },
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;

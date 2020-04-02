import { connect } from 'react-redux';

import TeamCard from '~/components/Page/UserProfile/ShowMyTeams/TeamCard';

import { updateCurrentTeamId } from '~/store/reducer/team';
import { isManager } from '~/store/reducer/user';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCurrentTeamId: (value) => {
    const action = updateCurrentTeamId(value);
    dispatch(action);
  },
  handleIsManager: () => {
    const action = isManager();
    dispatch(action);
  },
});

const TeamCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamCard);

export default TeamCardContainer;

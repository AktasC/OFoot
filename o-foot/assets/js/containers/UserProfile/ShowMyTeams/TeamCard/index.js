import { connect } from 'react-redux';

import TeamCard from '../../../../components/Page/UserProfile/ShowMyTeams/TeamCard';

import { updateCurrentTeamId } from '../../../../store/reducer/team';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCurrentTeamId: (value) => {
    const action = updateCurrentTeamId(value);
    dispatch(action);
  },
});

const TeamCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamCard);

export default TeamCardContainer;

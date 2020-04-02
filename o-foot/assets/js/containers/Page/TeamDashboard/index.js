import { connect } from 'react-redux';

import { getTeamInfosById } from 'Utils/selectors/selectors';

import TeamDashboard from '~/components/Page/TeamDashboard';
import { teamCalendarInfo } from '~/store/reducer/calendar';
import { playersInfos } from '~/store/reducer/team';

const mapStateToProps = (state, ownProps) => {
  const { teamId } = ownProps.match.params;
  const { teams } = state.userProfil.userInformations;

  const teamInfosById = getTeamInfosById(teamId, teams);

  return {
    teamInformations: teamInfosById,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCalendarTeamInfo: () => {
    const action = teamCalendarInfo();
    dispatch(action);
  },
  loadPlayersList: () => {
    const action = playersInfos();
    dispatch(action);
  },
});

const TeamDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamDashboard);

export default TeamDashboardContainer;

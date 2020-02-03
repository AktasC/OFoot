import { connect } from 'react-redux';

import { getTeamInfosById } from 'Utils/selectors/selectors';

import TeamDashboard from '~/components/Page/TeamDashboard';
import { resetUpdateData } from '~/store/reducer/user';
import { teamCalendarInfo } from '~/store/reducer/calendar';

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

  handleResetUpdateData: () => {
    const action = resetUpdateData();
    dispatch(action);
  },
});

const TeamDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamDashboard);

export default TeamDashboardContainer;

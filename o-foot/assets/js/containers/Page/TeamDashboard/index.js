import { connect } from 'react-redux';

import { getTeamInfosById } from '../../../../utils/selectors/selectors';

import TeamDashboard from '../../../components/Page/TeamDashboard';

const mapStateToProps = (state, ownProps) => {

  const teamId = ownProps.match.params.teamId;
  const teams = state.userProfil.userInformations['teams'];

  const teamInfosById = getTeamInfosById(teamId, teams);  
  
  return { 
    teamInformations: teamInfosById,   
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const TeamDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamDashboard);

export default TeamDashboardContainer;

import { connect } from 'react-redux';

import TeamInfosEditForm from '~/components/Page/TeamDashboard/TeamInfosCard/TeamInfosEditForm';

import { teamInfosUpdate } from '~/store/reducer/team';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitUpdateTeamInfos: (value) => {
    const action = teamInfosUpdate(value);
    dispatch(action);
  },
});

const TeamInfosEditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamInfosEditForm);

export default TeamInfosEditFormContainer;

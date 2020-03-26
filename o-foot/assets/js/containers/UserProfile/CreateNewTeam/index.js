import { connect } from 'react-redux';

import CreateNewTeam from '~/components/Page/UserProfile/CreateNewTeam';

import { createTeam } from '~/store/reducer/team';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = createTeam(value);
    dispatch(action);
  },

});

const CreateNewTeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateNewTeam);

export default CreateNewTeamContainer;

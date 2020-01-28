import { connect } from 'react-redux';

import CreateNewTeam from '../../../components/Page/UserProfile/CreateNewTeam';

import { changeInput, createTeam } from '../../../store/reducer/team';

const mapStateToProps = (state) => {
  return { 
    teamNameValue: state.team.teamNameValue,
    teamAddressValue: state.team.teamAddressValue,
    teamStadiumValue: state.team.teamStadiumValue,    
    teamCityValue: state.team.teamCityValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: ( value, name ) => {
    const action = changeInput(value, name);
    dispatch(action);
  },

  onSubmitCreateTeam: () => {    
    const action = createTeam();
    dispatch(action);
  },

});

const CreateNewTeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateNewTeam);

export default CreateNewTeamContainer;

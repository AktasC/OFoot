import { connect } from 'react-redux';

import Page from '~/components/Page';

import { userProfilInfo, teamCalendarInfo  } from '~/store/reducer/userProfil';
//import { teamCalendarInfo } from '~/store/reducer/calendar';

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
    signupDone: state.registerForm.signupDone,
    addTeam: state.user.addTeam,
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId')
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: () => {
    console.log('je charge les données');
    const action = userProfilInfo();
    dispatch(action);
  },

  loadCalendarTeamInfo: () => {
    console.log('je charge les données de lequipe');
    const action = teamCalendarInfo();
    dispatch(action);
  }
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;
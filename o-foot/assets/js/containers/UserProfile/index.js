import { connect } from 'react-redux';

import UserProfile from '../../components/Page/UserProfile';

import { userProfilInfo } from '../../store/reducer/userProfil';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { 
    userInformations: state.userProfil.userInformations,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: () => {
    console.log('je charge les données');
    const action = userProfilInfo();
    dispatch(action);
  }
});

const UserProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);

export default UserProfilContainer;

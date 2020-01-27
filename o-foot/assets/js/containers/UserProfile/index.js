import { connect } from 'react-redux';

import UserProfile from '../../components/Page/UserProfile';

import { userProfilInfo } from '../../store/reducer/userProfil';

const mapStateToProps = (state) => {
  return { 
    userInformations: state.userProfil.userInformations,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const UserProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);

export default UserProfilContainer;

import { connect } from 'react-redux';

import UserProfile from '../../components/Page/UserProfile';

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

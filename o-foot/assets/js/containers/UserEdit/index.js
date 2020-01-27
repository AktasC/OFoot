import { connect } from 'react-redux';

import UserEdit from '../../components/Page/UserProfile/UserEdit';

import { modifyUserInfo, changeAvatar, changeName, changeEmail } from '../../store/reducer/userProfil';

const mapStateToProps = (state) => {
  return { 
    picture_user: state.userProfil.userInformations.picture_user,
    first_name: state.userProfil.userInformations.first_name, 
    email: state.userProfil.userInformations.email, 
  };
};

const mapDispatchToProps = (dispatch) => ({

    handleSubmit: () => {
        const action = modifyUserInfo();
        dispatch(action);
      },

      handleAvatarChange: (value) => {
        const action = changeAvatar(value);
        dispatch(action);
      },
    
      handleNameChange: (value) => {
        console.log('name');
        const action = changeName(value);
        dispatch(action);
      },

      handleEmailChange: (value) => {
        const action = changeEmail(value);
        dispatch(action);
      },

});

const UserEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEdit);

export default UserEditContainer;
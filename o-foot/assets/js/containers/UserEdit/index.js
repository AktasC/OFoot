import { connect } from 'react-redux';

import UserEdit from '../../components/Page/UserProfile/UserEdit';

import { modifyUserInfo, changeAvatar, changeName, changeEmail, changeLastName } from '../../store/reducer/userProfil';

const mapStateToProps = (state) => {
    
    let firstname =  state.userProfil.userInformations.first_name;
    let email =  state.userProfil.userInformations.email;
    let lastname = state.userProfil.userInformations.last_name;
  
  return { 
    pictureuser: state.userProfil.userInformations.picture_user,
    firstname: state.userProfil.firstname, 
    email: state.userProfil.email, 
    lastname: state.userProfil.lastname,
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
        console.log(value);
        const action = changeName(value);
        dispatch(action);
      },

      handleEmailChange: (value) => {
        const action = changeEmail(value);
        dispatch(action);
      },

      handleLastNameChange: (value) => {
        const action = changeLastName(value); 
        dispatch(action);
      }

});

const UserEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEdit);

export default UserEditContainer;
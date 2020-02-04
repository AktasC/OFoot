import { connect } from 'react-redux';

import UserEdit from '~/components/Page/UserProfile/UserEdit';

import {
  userInfosUpdate,
} from '~/store/reducer/userProfil';

const mapStateToProps = (state) => ({
  first_name: state.userProfil.userInformations.first_name,
  last_name: state.userProfil.userInformations.last_name,
  mail: state.userProfil.userInformations.email,
  errorsUserEdit: state.userProfil.errorsUserEdit,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitUpdateUserInfos: (value) => {
    const action = userInfosUpdate(value);
    dispatch(action);
  },
});

const UserEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEdit);

export default UserEditContainer;

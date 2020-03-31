import { connect } from 'react-redux';

import UserEdit from '~/components/Page/UserProfile/UserEdit';

import { userInfosUpdate } from '~/store/reducer/userProfil';

const mapStateToProps = (state) => ({
  userInformations: state.userProfil.userInformations,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = userInfosUpdate(value);
    dispatch(action);
  },
});

const UserEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEdit);

export default UserEditContainer;

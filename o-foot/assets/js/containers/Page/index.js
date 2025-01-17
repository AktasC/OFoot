import { connect } from 'react-redux';
import Page from '~/components/Page';


import { userProfilInfo } from '~/store/reducer/userProfil';
import { resetUpdateData } from '~/store/reducer/user';


const mapStateToProps = (state) => ({
  logged: state.user.logged,
  signupDone: state.registerForm.signupDone,
  updateData: state.user.updateData,
  /* token: localStorage.getItem('token'), */
  userId: localStorage.getItem('userId'),
});

const mapDispatchToProps = (dispatch) => ({
  loadUserInfo: () => {
    const action = userProfilInfo();
    dispatch(action);
  },

  handleResetUpdateData: () => {
    const action = resetUpdateData();
    dispatch(action);
  },
});

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PageContainer;

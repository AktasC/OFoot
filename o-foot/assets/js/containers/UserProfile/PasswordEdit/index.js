import { connect } from 'react-redux';

import PasswordEdit from '~/components/Page/UserProfile/PasswordEdit';

import { changePassword } from '~/store/reducer/userProfil';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = changePassword(value);
    dispatch(action);
  },

});

const PasswordEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordEdit);

export default PasswordEditContainer;

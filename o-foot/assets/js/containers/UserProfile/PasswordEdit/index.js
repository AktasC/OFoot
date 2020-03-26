import { connect } from 'react-redux';

import PasswordEdit from '~/components/Page/UserProfile/PasswordEdit';

import { changeInput, noSubmitForm, submitChangePassword } from '~/store/reducer/userProfil';

const mapStateToProps = (state) => ({
  current_password: state.userProfil.current_password,
  new_password: state.userProfil.new_password,
  new_password_check: state.userProfil.new_password_check,
  PasswordValue: state.loginForm.passwordValue,
  errors: state.userProfil.errors,
});

const mapDispatchToProps = (dispatch) => ({

  handleChangeValue: (value, name) => {
    const action = changeInput(value, name);
    dispatch(action);
  },

  noSubmit: (value) => {
    const action = noSubmitForm(value);
    dispatch(action);
  },

  onSubmit: (value) => {
    const action = submitChangePassword(value);
    dispatch(action);
  },

});

const PasswordEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordEdit);

export default PasswordEditContainer;

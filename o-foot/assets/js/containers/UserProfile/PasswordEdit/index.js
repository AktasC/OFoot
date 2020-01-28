import { connect } from 'react-redux';

import PasswordEdit from '../../../components/Page/UserProfile/PasswordEdit';

import { currentPassword, newPassword, newPasswordCheck, noSubmitForm, submitChangePassword } from '../../../store/reducer/userProfil';

const mapStateToProps = (state) => {
  return { 
    current_password: state.userProfil.current_password, 
    new_password: state.userProfil.new_password, 
    new_password_check: state.userProfil.new_password_check,
    PasswordValue: state.loginForm.PasswordValue, 
    errors: state.userProfil.errors,
  };
};

const mapDispatchToProps = (dispatch) => ({

    handleChangeCurrentPassword: (value) => {
        const action = currentPassword(value);
        dispatch(action);
      },
    
    handleChangeNewPassword: (value) => {
        const action = newPassword(value); 
        dispatch(action); 
    },

    handleChangeNewPasswordCheck: (value) => {
        const action = newPasswordCheck(value); 
        dispatch(action); 
    },

    noSubmit: (value) => {
        const action = noSubmitForm(value); 
        dispatch(action); 
    },

    submitForm: () => {
        const action = submitChangePassword();
        dispatch(action); 
    }

});

const PasswordEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordEdit);

export default PasswordEditContainer;
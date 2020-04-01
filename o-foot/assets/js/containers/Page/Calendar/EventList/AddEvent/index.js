import { connect } from 'react-redux';

import AddEvent from '~/components/Page/Calendar/EventList/AddEvent';

import {
  eventTypeSelection, matchTypeSelection, addNewEvent,
} from '~/store/reducer/event';

const mapStateToProps = (state) => ({
  selectedOption: state.event.selectedOption,
  selectedOptionMatch: state.event.selectedOptionMatch,
});

const mapDispatchToProps = (dispatch) => ({
  eventOptionChange: (value) => {
    const action = eventTypeSelection(value);
    dispatch(action);
  },

  matchOptionChange: (value) => {
    const action = matchTypeSelection(value);
    dispatch(action);
  },

  onSubmitAddEvent: (value) => {
    const action = addNewEvent(value);
    dispatch(action);
  },

});

const AddEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEvent);

export default AddEventContainer;

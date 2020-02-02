import { connect } from 'react-redux';

import AddEvent from '~/components/Page/Calendar/EventList/AddEvent';

import { eventTypeSelection, matchTypeSelection, changeInput, addNewEvent } from '~/store/reducer/event';

const mapStateToProps = (state) => {
  return { 
    selectedOption: state.event.selectedOption,
    selectedOptionMatch: state.event.selectedOptionMatch,
    opponent: state.event.opponent,
    date_time: state.event.date_time,
    stadium: state.event.stadium,
    adress: state.event.adress
  };
};

const mapDispatchToProps = (dispatch) => ({
    eventOptionChange: (value) => {
        const action = eventTypeSelection(value);
        dispatch(action);
      },
    
    matchOptionChange: (value) => {
        const action = matchTypeSelection(value);
        dispatch(action);
    },

    onValueChange: (value, name) => {
        const action = changeInput(value, name);
        dispatch(action);
    },

    onSubmitAddEvent: () => {
        const action = addNewEvent();
        dispatch(action);
    }

});

const AddEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEvent);

export default AddEventContainer;
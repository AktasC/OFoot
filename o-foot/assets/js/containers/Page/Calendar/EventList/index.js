import { connect } from 'react-redux';

import EventList from '~/components/Page/Calendar/EventList';


const mapStateToProps = (state, ownProps) => ({
  eventData: state.calendar.teamCalendarInformations,
  currentTeamId: state.team.currentTeamId,
});

const mapDispatchToProps = (dispatch) => ({

});

const EventListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);

export default EventListContainer;

import { connect } from 'react-redux';

import TeamInfosCard from '~/components/Page/TeamDashboard/TeamInfosCard';

const mapStateToProps = (state) => ({
  isManager: state.user.isManager,
});

const mapDispatchToProps = (dispatch) => ({
});

const TeamInfosCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamInfosCard);

export default TeamInfosCardContainer;

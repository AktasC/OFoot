import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { browserHistory } from 'react-router';

// Import scss
import './page.scss';

import Home from './Home';
import Register from './Register';
import Login from '~/containers/Login';
import LegalsMentions from './LegalsMentions';
import WhoAreWe from './WhoAreWe';
import UserProfile from '~/containers/UserProfile';
import TeamDashboard from '~/containers/Page/TeamDashboard';
import EventList from '~/containers/Page/Calendar/EventList';
import List from '~/containers/Page/Players/List';
import Page404 from './Page404';


import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class Page extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidUpdate() {
    if (this.props.logged == true || this.props.addTeam == true) {
      this.props.loadUserInfo();
    }

    if (this.props.logged == true || this.props.updateData == true) {
      this.props.loadUserInfo();
      if (this.props.updateData == true) {
        this.props.handleResetUpdateData();
      }
    }
  }

  render() {
    const { signupDone, logged, userId } = this.props;


    return (
      <div id="page">

        <Switch>
          <Route path="/team/:teamId" component={TeamDashboard} />
          <Route path="/event/list" component={EventList} />
          <Route exact path={`/user/profile/${userId}`}>
            <UserProfile />
          </Route>
          <Route path="/register">
            {signupDone ? <Redirect to="login" /> : <Register />}
          </Route>
          <Route path="/players/list">
            <List />
          </Route>
          <Route path="/legals-mentions">
            <LegalsMentions />
          </Route>
          <Route path="/who-are-we">
            <WhoAreWe />
          </Route>
          <Route exact path="/">
            {logged ? <Redirect to={`/user/profile/${userId}`} /> : <Home />}
          </Route>
          <Route path="/login">
            {logged ? <Redirect to={`/user/profile/${userId}`} /> : <Login />}
          </Route>
          <Route component={Page404} />
        </Switch>

      </div>
    );
  }
}

Page.propTypes = {
  logged: PropTypes.bool,
  signupDone: PropTypes.bool.isRequired,
  userId: PropTypes.string,
};

export default Page;

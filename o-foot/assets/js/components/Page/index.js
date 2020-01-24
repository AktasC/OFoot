import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Import scss
import './page.scss';

import Home from './Home';
import Register from './Register';
import Login from '../../containers/Login';
import LegalsMentions from './LegalsMentions';
import WhoAreWe from './WhoAreWe';
import UserProfile from '../../containers/UserProfile';
import TeamDashboard from './TeamDashboard';

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.props.loadUserInfo();    
  }

  render() {

    const { signupDone, logged } = this.props;
    
    
    return (
      <div id="page">    

        <Switch>
          <Route path='/team'>
            <TeamDashboard />
          </Route>
          <Route exact path={`/user/profile/${this.props.userId}`}>
            <UserProfile />
          </Route>
          <Route path='/register'>
            {signupDone ? <Redirect to="login" /> : <Register />}   
          </Route>
          <Route path='/legals-mentions'>
            <LegalsMentions />
          </Route>
          <Route path='/who-are-we'>
            <WhoAreWe />
          </Route>
          <Route exact path='/'>
            {logged ? <Redirect to={`/user/profile/${this.props.userId}`} /> : <Home />}        
          </Route>
          <Route path='/login'>
            {logged ? <Redirect to={`/user/profile/${this.props.userId}`} /> : <Login />} 
          </Route>
        </Switch>
            
      </div>
    );
  }
 
};

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
  signupDone: PropTypes.bool.isRequired,
};

export default Page;

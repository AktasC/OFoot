import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

// Import scss
import './page.scss';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import LegalsMentions from './LegalsMentions';
import WhoAreWe from './WhoAreWe';
import UserProfile from '../../containers/UserProfile';


const Page = ({ logged }) => (
      
  <div id="page">
    <Switch>
      <Route exact path="/user/profile/:id">
        <UserProfile />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/legals-mentions'>
        <LegalsMentions />
      </Route>
      <Route path='/who-are-we'>
        <WhoAreWe />
      </Route>
      <Route exact path='/'>
        {logged ? <Redirect to="/user/profile" /> : <Home />}        
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  </div>

);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Page;

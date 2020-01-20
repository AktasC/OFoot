import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// Import scss
import './page.scss';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import LegalsMentions from './LegalsMentions';
import WhoAreWe from './WhoAreWe';
import UserHome from './UserHome'; 


const Page = ({ logged }) => (

  <div id="page">
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/legals-mentions">
        <LegalsMentions />
      </Route>
      <Route path="/who-are-we">
        <WhoAreWe />
      </Route>

      <Route exact path="/user/profil">
      <UserHome />
      </Route>
    </Switch>
  </div>

);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Page;

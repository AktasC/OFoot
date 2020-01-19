import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// Import scss
import './page.scss';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import LegalsMentions from './LegalsMentions';
import WhoAreWe from './WhoAreWe';


const Page = () => (

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
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </div>

);

export default Page;

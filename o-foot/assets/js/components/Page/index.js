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
import UserProfile from './UserProfile';

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Page = ({ logged, signupDone, id }) => (  

  <div id="page">    

    <Switch>
    <Route exact path={`/user/profile/${id}`}>
        {!logged ? <Redirect to='/' /> : <UserProfile />} 
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
        {logged ? <Redirect to={`/user/profile/${id}`} /> : <Home />}        
      </Route>
      <Route path='/login'>
        {logged ? <Redirect to={`/user/profile/${id}`} /> : <Login />} 
      </Route>
    </Switch>
        
  </div>
 
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
  signupDone: PropTypes.bool.isRequired,
};

export default Page;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';

// Import scss
import './page.scss';

import Home from '../Page/Home';
import Register from '../Page/Register';
import LegalsMentions from '../Page/LegalsMentions';
import WhoAreWe from '../Page/WhoAreWe';



const Page = () => (
    
    <div id="page">
      <Switch> 
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/legals-mentions'>
          <LegalsMentions />
        </Route>
        <Route path='/who-are-we'>
          <WhoAreWe />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
 
);

export default Page;

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

import MentionsLegales from '../MentionsLegales';
import QuiSommesNous from '../QuiSommesNous';
import Home from '../Home';


const Page = () => (
    
    <div id="page">
      <Switch>      
        <Route path='/mentions-legales'>
          <MentionsLegales />
        </Route>
        <Route path='/qui-sommes-nous'>
          <QuiSommesNous />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
 
);

export default Page;

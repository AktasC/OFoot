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
import Enregistrement from '../Page/Enregistrement';
import MentionsLegales from '../Page/MentionsLegales';
import QuiSommesNous from '../Page/QuiSommesNous';



const Page = () => (
    
    <div id="page">
      <Switch> 
        <Route path='/enregistrement'>
          <Enregistrement />
        </Route>
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

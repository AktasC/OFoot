// == Import : npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// == Import : local
import './app.scss';

// == Import : components
import Header from '../Header';
import Footer from '../Footer';
import MentionsLegales from '../MentionsLegales';
import QuiSommesNous from '../QuiSommesNous';
import Home from '../Home';

// == Composant
const App = () => (
  <div id="app">
    <Header />

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

    <Footer />
  </div>
);

// == Export
export default App;

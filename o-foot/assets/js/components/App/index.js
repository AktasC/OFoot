// == Import : npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// == Import : local
import './app.scss';

// == Import : components
import Header from '../Header';
import Page from '../../containers/Page';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;

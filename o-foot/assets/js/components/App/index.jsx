// == Import : npm
import React from 'react';
import ReactNotifications from 'react-notifications-component';

// == Import : local
import './app.scss';

// == Import : components
import Header from '~/containers/Header';
import Page from '~/containers/Page';
import Footer from '~/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <ReactNotifications />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;

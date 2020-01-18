// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : components
import Header from '../Header';
import Page from '../Page';
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

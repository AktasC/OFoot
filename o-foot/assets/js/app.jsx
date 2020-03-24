// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BreakpointsProvider } from 'react-with-breakpoints';
import store from './store';

// == Import : local
// Styles de base
// ERREUR : TODO
// import '../public/styles/index.scss';
// Composant racine
import App from './components/App';

const breakpoints = {
  small: 744,
  medium: 992,
  large: 1440,
  xlarge: Infinity,
};

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <Provider store={store}>
    <Router>
      <BreakpointsProvider breakpoints={breakpoints}>
        <App />
      </BreakpointsProvider>
    </Router>
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);

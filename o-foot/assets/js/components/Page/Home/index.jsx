import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Section from './Section';

// Import scss
import './home.scss';

// Data
import functionnalities from '~/../data/fonctionnalities';


const Home = () => (

  <div id="home">

    <div className="home-pres">
      <h1 className="home-title">Bienvenue sur O'Foot !</h1>

      <div className="30 home-subtitle">O'Foot vous permet de gérer facilement et rapidement votre saison sportive. Que vous soyez joueur, entraîneur ou membre du staff technique les fonctionnalités O'Foot vous aideront à gagner du temps afin d'en passer plus sur le terrain !</div>

      <div className="home-buttons">
        <NavLink to="register">
          <Button>S'inscrire</Button>
        </NavLink>

        <NavLink to="login">
          <Button>Se Connecter</Button>
        </NavLink>
      </div>
    </div>

    <div className="home-functionalities">
      {functionnalities.map((func, i) => (
        <Section key={i} {...func} />
      ))}
    </div>

  </div>

);


export default Home;

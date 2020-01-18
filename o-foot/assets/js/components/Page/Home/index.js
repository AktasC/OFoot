import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Section from './Section';

// Import scss
import './home.scss';

//Data
import functionnalities from './fonctionnalities.json';


const Home = () => (
   
    <div id="home">

      <div className="home-pres">
        <h1 className="home-title">Bienvenue sur O'Foot !</h1>
        
        <div className="30 home-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ea libero esse voluptatibus atque deleniti, nostrum dolore facere tenetur corrupti adipisci amet tempore enim nulla accusantium harum veritatis. Voluptate, dolores.</div>

        <div className="home-buttons">
            
              <NavLink to="enregistrement">
                <Button>S'inscrire</Button>
              </NavLink> 
            
            <Button>Se Connecter</Button>
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
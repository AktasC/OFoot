import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import scss
import './footer.scss';


const Footer = () => (
    
    <div id="footer">
        <div id="footer-links">
          <NavLink to="/legals-mentions" className="link">Mentions Légales</NavLink>
          <NavLink to="/who-are-we" className="link">Qui Sommes-Nous ?</NavLink>
        </div>
    </div>
 
);

export default Footer;

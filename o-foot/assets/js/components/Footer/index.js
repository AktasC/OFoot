import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Import scss
import './footer.scss';


const Footer = () => (
    
    <div id="footer">
        <div id="footer-links">
          <NavLink to="mentions-legales" className="link">Mentions Légales</NavLink>
          <NavLink to="qui-sommes-nous" className="link">Qui Sommes-Nous ?</NavLink>
        </div>
    </div>
 
);

export default Footer;

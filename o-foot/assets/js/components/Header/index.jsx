import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io';

// Import scss
import './header.scss';

const Header = ({ logged, disconnect }) => {
  const disconnectionRequested = () => {
    disconnect();
  };

  return (

    <Navbar id="header" collapseOnSelect expand="lg" fixed="top">

      <NavLink to="/" className="link">
        <Navbar.Brand className="header-title">
          <img src="https://image.flaticon.com/icons/svg/861/861512.svg" alt="Logo" />
          O'FOOT
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>
          <IoIosMenu size={30} />
        </span>
      </Navbar.Toggle>

      {!logged
        && (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <NavLink to="register" className="dropdown-link">S'inscrire</NavLink>
            <NavLink to="login" className="dropdown-link">Se connecter</NavLink>
          </Nav>
        </Navbar.Collapse>
        )}

      {logged
        && (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <NavLink to="/" className="dropdown-link">Voir son profil</NavLink>
            <NavLink to="/" className="dropdown-link" onClick={disconnectionRequested}>Se déconnecter</NavLink>
          </Nav>
        </Navbar.Collapse>
        )}



    </Navbar>

  );
};

export default Header;


Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
};

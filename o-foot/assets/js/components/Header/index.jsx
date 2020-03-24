import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShowAt, HideAt } from 'react-with-breakpoints';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCog } from 'react-icons/fa';
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

      {/* Affichage en dessus de 992px */}
      <ShowAt breakpoint="mediumAndBelow">
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
      </ShowAt>

      {/* Affichage au dessus de 992px */}
      <HideAt breakpoint="mediumAndBelow">
        {!logged
          && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <NavDropdown alignRight title={<IoIosMenu size={30} />} id="collasible-nav-dropdown">
                <NavLink to="register" className="dropdown-link">S'inscrire</NavLink>
                <NavLink to="login" className="dropdown-link">Se connecter</NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          )}

        {logged
          && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <NavDropdown alignRight title={<FaUserCog size={30} />} id="collasible-nav-dropdown" class="dropdown-menu-logged">
                <NavLink to="/" className="dropdown-link">Voir son profil</NavLink>
                <NavLink to="/" className="dropdown-link" onClick={disconnectionRequested}>Se déconnecter</NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          )}
      </HideAt>


    </Navbar>

  );
};

export default Header;


Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaBar } from 'react-icons/fa';

// Import scss
import './header.scss';


const Header = ({ logged, disconnect }) => {

  const disconnectionRequested = () => {
    disconnect();
  };
  
  return(

  <Navbar id="header" collapseOnSelect expand="lg" fixed="top">
    <NavLink to="/" className="link">
      <Navbar.Brand className="header-title">
        <img src="https://image.flaticon.com/icons/svg/861/861512.svg" alt="Logo" />
          O'FOOT
      </Navbar.Brand>
    </NavLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    {!logged && 
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" />
    <Nav>
      <NavDropdown alignRight title="Par là !" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">
          <NavLink to="register" className="dropdown-link">S'inscrire</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
          <NavLink to="login" className="dropdown-link">Se connecter</NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
    }

  {logged && 
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" />
    <Nav>
      <NavDropdown alignRight title="Zone User" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">
          <NavLink to="/" className="dropdown-link">Voir son profil</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
          <NavLink to="/" className="dropdown-link" onClick={disconnectionRequested}>Se déconnecter</NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
    }
    
  </Navbar>


);
}

export default Header;


/* <Menu id="header">

<NavLink to="home" className="link">
<Menu.Item className="header-title">

    <img src="https://image.flaticon.com/icons/svg/861/861512.svg" alt="Logo" />
    O'FOOT

</Menu.Item>
</NavLink>

<Menu.Menu position='right'>
  <Dropdown item icon='bars'>
    <Dropdown.Menu>
      <Dropdown.Item>S'inscrire</Dropdown.Item>
      <Dropdown.Item>Se Connecter</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Menu.Menu>

</Menu> */

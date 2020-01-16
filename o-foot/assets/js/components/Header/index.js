import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

// Import scss
import './header.scss';


const Header = () => (
    <Menu id="header">

      <Menu.Item>
        <img src="https://image.flaticon.com/icons/svg/861/861512.svg" alt="Logo" />
        O'Foot
      </Menu.Item>      
      
      <Menu.Menu position='right'>
        <Dropdown item icon='bars'>
          <Dropdown.Menu>
            <Dropdown.Item>S'inscrire</Dropdown.Item>
            <Dropdown.Item>Se Connecter</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> 
      </Menu.Menu>     
      
    </Menu>
 
);

export default Header;

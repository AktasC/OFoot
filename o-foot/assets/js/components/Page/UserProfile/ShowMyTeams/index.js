import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

// Import scss
import './show-my-teams.scss';

import Slider from 'react-slick';
import TeamCard from './TeamCard';

const showMyTeams = ( teams ) => {

  console.log("depuis ShowMyTeam:", teams);
  // On ne peut maper que sur un array [] je transforme donc mon objet recu de mon composant parent en array
  var arrTeams = Object.values(teams);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,   
  };  

  return (
   
    <div id="showMyTeams">      
      <Row>
        <Col md={12} > 
          <Slider {...settings}>          
          {arrTeams.map((team, i) => ( 
            <TeamCard key={i}  {...team} />                              
          ))}
          </Slider>
        </Col>
      </Row>
    </div>
  )
};

showMyTeams.propTypes = {
  /* teams: PropTypes.object.isRequired, */
};

export default showMyTeams;